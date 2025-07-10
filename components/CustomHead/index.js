import Head from "next/head"

export default function CustomHead({
    title,
    metaTitle = 'Lance Matsuo Malaga | Portfolio',
    metaDescription = 'A website portfolio showcasing all development and design projects by Lance Matsuo Malaga',
}) {
    return (
        <Head>
            <title>Lance Malaga {title ? `| ${title}` : ''}</title>
            <meta name="author" content="Lance Malaga Portfolio" />
            <meta property="title"  content={metaTitle} />
            <meta property="description"  content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}