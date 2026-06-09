import { getAllPosts } from '@/lib/news-service'
import { ContentBlock } from '@/lib/news'

const BASE_URL = 'https://www.onyxproject.site'

function blocksToText(body: ContentBlock[]): string {
  return body
    .filter((b) => b.type === 'text')
    .map((b) => (b as { type: 'text'; content: string }).content)
    .join(' ')
    .slice(0, 300)
}

export async function GET() {
  const posts = await getAllPosts()

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/news/${post.id}</link>
      <guid isPermaLink="true">${BASE_URL}/news/${post.id}</guid>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[${blocksToText(post.body)}]]></description>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ONYX AI PROJECT</title>
    <link>${BASE_URL}</link>
    <description>물리적 제약에서 벗어나 IP의 가능성을 무한히 확장합니다.</description>
    <language>ko</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
