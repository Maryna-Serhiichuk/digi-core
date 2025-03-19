import imgFull01 from '@/sources/blog/01/full.jpg'
import imgF02 from '@/sources/blog/02/full.jpg'
import imgMi02 from '@/sources/blog/02/full.jpg'
import imgMo02 from '@/sources/blog/02/full.jpg'
import imgF03 from '@/sources/blog/03/full.jpg'
import imgMi03 from '@/sources/blog/03/full.jpg'
import imgMo03 from '@/sources/blog/03/full.jpg'
import { getMember } from '@/data/members/members'
import { PictureArgs } from '@/components/Picture'

enum Categories {
    Business,
    Development,
    Design,
}

interface ArticleType {
    id: string
    title: string
    readTime: string
    author: MemberType
    comment?: string
    category: string
    published: string
    illustration: PictureArgs
    contain: string
}

export const articles: Array<ArticleType> = [
    {
        id: '1',
        title: 'The Future of Digital Marketing: Trends to Watch in 2025',
        readTime: '8 mins',
        author: getMember('17'),
        category: Categories[0],
        published: '12-20-2023',
        illustration: { full: imgFull01 },
        comment: 'In 2025, digital marketing is driven by AI-powered personalization, immersive experiences, and a growing focus on sustainability and privacy, shaping a future where brands must innovate to stay relevant.',
        contain: `

### AI-Powered Personalization Takes Center Stage

Artificial intelligence (AI) is no longer a futuristic concept—it’s a cornerstone of modern marketing. In 2025, AI-driven personalization will reach new heights, enabling brands to deliver hyper-tailored experiences to individual consumers. From personalized product recommendations to dynamic website content that adapts in real-time, AI will analyze vast amounts of data—such as browsing history, preferences, and even emotional cues—to create seamless, one-to-one interactions.

For example, imagine a customer visiting an online store and seeing a homepage that adjusts based on their mood, inferred from their recent social media activity. This level of customization not only boosts engagement but also fosters brand loyalty. Marketers will need to invest in AI tools and ethical data practices to strike the right balance between personalization and privacy.

### The Rise of Immersive and Search-Driven Experiences

With the proliferation of smart speakers, wearables, and advanced image recognition technology, voice and visual search are transforming how consumers discover products and services. By 2025, optimizing for these search methods will be non-negotiable. Voice search, powered by natural language processing, will demand conversational content—think long-tail keywords and question-based phrases like “What’s the best eco-friendly skincare brand?”

Meanwhile, visual search will empower users to snap a photo of an item and instantly find similar products online. Platforms like Pinterest and Google Lens are already leading the charge, and brands will need to prioritize high-quality visuals and metadata to rank in these searches. The takeaway? SEO strategies must evolve beyond text to embrace multimedia.

Augmented reality (AR) is set to redefine digital marketing by blending the physical and virtual worlds. In 2025, AR will move beyond gaming into mainstream advertising, offering immersive experiences that captivate audiences. Picture this: a furniture retailer lets customers “place” a sofa in their living room via their smartphone camera, or a makeup brand offers a virtual try-on feature that adjusts to lighting and skin tone.

These interactive campaigns don’t just entertain—they drive conversions by reducing purchase hesitation. As AR hardware becomes more accessible and software more sophisticated, marketers will need to integrate this technology into their strategies to stand out in a crowded digital space.

### Privacy, Sustainability, and the Creator Economy Reshape Marketing

Consumers in 2025 are more environmentally conscious than ever, and they expect brands to reflect their values. Sustainability isn’t just a buzzword—it’s a competitive advantage. Digital marketing will increasingly spotlight eco-friendly practices, from carbon-neutral campaigns to transparent supply chain storytelling. Brands that leverage green certifications or partner with climate-focused initiatives will resonate with this growing demographic.

At the same time, the creator economy—fueled by influencers, bloggers, and video content makers—will continue its meteoric rise. However, the focus will shift from mega-influencers to micro- and nano-influencers, who boast smaller but highly engaged audiences. These authentic voices foster deeper connections, making them ideal for niche marketing.

Finally, the phasing out of third-party cookies, already underway, will be fully realized by 2025, forcing marketers to rethink data collection. Privacy regulations like GDPR and CCPA will tighten, and consumers will demand greater control over their information. Enter first-party data: brands will rely on direct relationships—think loyalty programs, email signups, and app interactions—to gather insights.

The future of digital marketing in 2025 promises a blend of innovation and adaptation. From AI-driven personalization to sustainable storytelling, the trends reshaping the industry reflect a broader shift toward technology that empowers and respects the consumer. For businesses, the challenge lies in embracing these changes without losing sight of their core identity.
        `
    },
    {
        id: '2',
        title: 'The Rise of Artificial Intelligence in Web Development',
        readTime: '12 mins',
        author: getMember('4'),
        category: Categories[1],
        published: '01-29-2024',
        illustration: { full: imgF02, middle: imgMi02, mobile: imgMo02 },
        contain: ``
    },
    {
        id: '3',
        title: 'The Importance of Responsive Design in a Mobile-First World',
        readTime: '14 mins',
        author: getMember('10'),
        category: Categories[2],
        published: '02-16-2024',
        illustration: { full: imgF03, middle: imgMi03, mobile: imgMo03 },
        contain: ``
    },
    {
        id: '4',
        title: 'How to Improve SEO and Rank Higher on Google in 2025',
        readTime: '7 mins',
        author: getMember('18'),
        category: Categories[1],
        published: '04-21-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '5',
        title: 'Cybersecurity for Small Businesses: Protecting Your Digital Assets',
        readTime: '6 mins',
        author: getMember('13'),
        category: Categories[1],
        published: '05-05-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '6',
        title: 'Why User Experience Matters: Creating Websites That Convert',
        readTime: '6 mins',
        author: getMember('3'),
        category: Categories[2],
        published: '06-11-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '7',
        title: 'Content is King: How to Create Engaging Content That Drives Traffic',
        readTime: '9 mins',
        author: getMember('17'),
        category: Categories[2],
        published: '07-17-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '8',
        title: 'Effective Project Management Strategies for Remote Tech Teams',
        readTime: '8 mins',
        author: getMember('20'),
        category: Categories[0],
        published: '07-17-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '10',
        title: 'The Role of Web3 in Modern Web Development: Opportunities and Challenges',
        readTime: '11 mins',
        author: getMember('4'),
        category: Categories[1],
        published: '08-19-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '11',
        title: 'Headless CMS: Is It the Future of Web Development?',
        readTime: '9 mins',
        author: getMember('7'),
        category: Categories[1],
        published: '09-22-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '12',
        title: 'How to Attract and Retain Top Tech Talent in 2025',
        readTime: '7 mins',
        author: getMember('20'),
        category: Categories[0],
        published: '10-16-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
    {
        id: '13',
        title: 'Agile vs. Waterfall: Which Project Management Method is Best?',
        readTime: '8 mins',
        author: getMember('20'),
        category: Categories[0],
        published: '11-29-2024',
        illustration: { full: imgFull01 },
        contain: ``
    },
]