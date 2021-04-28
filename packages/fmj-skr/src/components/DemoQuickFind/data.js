const searchResultsData = [
    {
        icon: '🍰',
        title: '蛋糕',
        des: '此处是描述描述描述描述描述描述描述描述描述描述描述',
    },
    {
        icon: '🍣 ',
        title: '基本信息',
        des: '此处是描述描述描述描述描述描述描述描述描述描述描述',
    },
    {
        icon: '📱',
        title: 'iphone手机',
        des: '此处是描述描述描述描述描述export default DemoPopSearch;描述描述描述描述描',
    },
    {
        icon: '🧑‍💻',
        title: '成员管理',
        des: '此处是描述描述描述描述描述描述描述描述描述描述描述',
    },
    {
        icon: '🍉',
        title: '成员管理2',
        des: '此处是描述描述描述描述描述描述描述描述描述描述描述',
    },
    {
        icon: ' 🍱',
        title: ' 🍣 🍱 🥟',
        des: '此处是描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述此处是描述描述描述描述描述描述描述描述描述描述描述此处是描述描述描述描述描述描述描述描述描述描述描述',
    },
    {
        icon: '🍫‍',
        title: '成员管理4',
        des: '如果还不够清楚，还可以参考《JavaScript高级程序设计(第3版)》第324页；',
    },
    {
        icon: '🍬',
        title: '成员管理5',
        des: '本地 DNS 服务器继续向 example.com 权威 DNS 域名服务器发起请求，权威 DNS xxx.example.cdn.com 域名。',
    },
    {
        icon: '🧑‍',
        title: '成员管理6',
        des: '此处是描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述此处是描述描述描述描述描述描述描述描述描述描述描述此处是描述描述描述描述描述描述描述描述描述描述描述',
    },
    {
        icon: '🍭',
        title: '成员管理7',
        des: '一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。',
    },
    {
        icon: '🚗',
        title: '成员管理8',
        des: '因为他们的物流仓库中心当时并没有在县城里来建设有库存，则可能会从北京物流仓库（看做中心仓库）发货，一旦中心仓库也无货，那就只能从厂商进货了（看做源站）。',
    },
    {
        icon: '💻',
        title: '成员管CDN的全称理',
        des: 'CDN 的全称是 (Content Delivery Network/Content Distribution Network)，即内容分发网络。',
    },
    {
        icon: '‍🍉',
        title: '什么是 GSLB？',
        des: 'GSLB（Global Server Load Balance），即全局负载均衡，它的含务器之间做负载均衡。一方面可以让流量均衡负载到它下面的服务器上，另一方面能根据地理位置判断，找到离用户最近的服务器。',
    },
    {
        icon: '‍🥕',
        title: '成员管理10',
        des: `其实，这里说解析错误并不是很合理，应该是说浏览器解析出来的结果和我们期望的结果不一致，但任何的嵌套错误都不会导致页面呈现有很大的出错拥抱WEB标
    原本我们认为从HTML4到XHTML是一个时代，现在又从XHTML跨到了HTML5，新时代新标准的诞生，我们应该敞开胸怀去拥抱，而不是排斥。
    你关注或不关注，标准就在那里，只增不减。我们应该感谢W3C这样一个组织，让各个浏览器厂商抛开彼此的敌意共同制定新的标准。不然，也许你会像90年代那样，JS引用一个元素都需要为某个浏览器写一套自己的代码。
    WEB标准只会使我们吃饭变得更香，睡眠变得更好，新的技术或标准会推动我们去富有热情的coding`,
    },
    {
        icon: '‍👨🏻‍🍳',
        title: '成员管理10',
        des: `CDN 的全称是 (Content Delivery Network/Content Distribution Network)，即内容分发网络。CDN解决的问题是在网
                络中增加一层CACHE（缓存）层，将源站的资源分发到距离用户最近的网络"边缘"节点上，使用户就近访问内容，提高网站响应速度，避免网络拥塞，保证了用户访问资源的速度和体验。`,
    },
    {
        icon: '‍🍉',
        title: 'CDN 工作原理',
        des: '那么用户是如何访问到离他最近的 CDN 节点的呢？',
    },
    {
        icon: '‍ 🍎',
        title: '成员管理10',
        des: '此处是描述描述描述描述描述此处是描述述描述描述描述',
    },
    {
        icon: '‍🍍',
        title: 'DNS 域名服务器发起请求',
        des: '本地 DNS 服务器会向根域名服务器发起请求，根域名服务器返回顶级 DNS 域名服务器地址，让你去它那里查找。',
    },
    {
        icon: '‍🍉',
        title: '成员管理10',
        des: '对于大的音视频流媒体文件，可以通过 CDN 厂商提供的接口提前将资源写入到 CDN 某一个节点上，再由 CDN 内部机制将资源分发到其他 CDN 节点上。',
    },
    {
        icon: '🌽',
        title: 'WorkSpaceInput',
        des: ' WorkSpaceInput,WorkSpaceSettingDivider,',
    },
    {
        icon: '🧬 ',
        title: '测试基因组',
        des: `🚬 ⚰️ ⚱️ 🏺 🧭 🧱 🔮 🧿 🧸 📿 💈 ⚗️ 🔭 🧰 🧲 🧪 🧫 🧬 🧯 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🧴 🧵 🧶 🧷
         🧹 🧺 🧻 🧼 🧽 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🧳 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🧨 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 
         📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇📏 📐 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓`,
    },
    {
        icon: ' 💊',
        title: '成员管理10',
        des: ' 厂商提供的接口提前将资源写入到 CDN 某一个 e references But what would happen with a',
    },
    {
        icon: '🇦🇿 ',
        title: '成员管理10',
        des: `Multiple references But what would happen with an undetermined array of <
        input/>?We need to define inputRef as an array, so that current property becomes an array as well.`,
    },
    {
        icon: '🧤',
        title: '标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字文件.',
        des: 'Code straight to the point written in beautiful Barcelona.Free, no ads, no sponsored content.',
    },
    {
        icon: '✨',
        title: '【小米10周年】',
        des: '一往无前【小米10周年】首次公开小米历史上不为人知的创业故事雷军亲述小米热血10年，小米官方授权传记，首次完整揭秘小米独特商业模式 58 元78 元',
    },
];

const recentPagesData = [
    {
        icon: '🍰',
        title: '蛋糕',
    },
    {
        icon: '🍣 ',
        title: '基本信息',
    },
    {
        icon: '📱',
        title: 'iphone',
    },
    {
        icon: '🧑‍💻',
        title: `因为他们的物流仓库中心当时并没有在县城里来建设，所以一般可能从地市或者省会（看做区域仓库）物流
            仓库去查找是否有库存，如果区域物流仓库还是没有库存，则可能会从北京物流仓库（看做中心仓库）发货，一旦中心仓库也无货，那就只能从厂商进货了（看做源站）`,
    },
    {
        icon: '🧑‍',
        title: '成员管理2',
    },
];

const recentSearchesData = [
    {
        text: '芜湖abc',
    },
    {
        text: '你好啊',
    },
    {
        text: '一往无前揭秘小米独特商业模式 58 元78 元',
    },
    {
        text: '最近搜索内容',
    },
];

const notFindText = [
    {
        title: '没有找到匹配项',
        des: '请尝试不同的搜索关键词',
    },
];

export {recentPagesData, recentSearchesData, searchResultsData, notFindText};
