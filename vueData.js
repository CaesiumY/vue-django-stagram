var navigation = {
    template: `
<nav class="nav">
    <div class="nav-container">
        <span class="nav-logo">
            <i class="fab fa-instagram navBtn"></i>
            <span class="line"></span>
            <img src="https://raw.githubusercontent.com/lebmouse/frontSession_material/draft/image/logo_font.png"
                alt="" class="nav-logoImg">
        </span>
        <span class="nav-group">
            <span class="nav-group-container">
                <span class="nav-explorer">
                    <i class="far fa-compass navBtn"></i>
                </span>
                <span class="nav-like">
                    <i class="far fa-heart navBtn"></i>
                </span>
                <span class="nav-profile">
                    <i class="far fa-user navBtn"></i>
                </span>
            </span>
        </span>
    </div>
</nav>`
};

var postHead = {
    props: ["post"],
    template: `
    <div class="post-head">
        <div class="post-head-container">
            <div class="post-head-profile">
                <img :src="post.head.img" alt="profile" class="post-head-profileImg">
            </div>
                <div class="post-head-name"><b>{{post.head.name}}</b></div>
                <div class="post-head-btn">...</div>
        </div>
    </div>
    `
};

var postContents = {
    props: ["post"],
    template: `
<div class="post-contents">
    <div class="post-contents-container" v-for="content in post.contents">
        <img :src="content.img" alt="" class="post-contentsImg">
    </div>
</div>`
};

var postInfo = {
    props: ["post"],
    template: `
<div class="post-info">
    <div class="post-info-container">
        <i class="far fa-heart infoBtn"></i>
        <i class="far fa-comment infoBtn"></i>
        <i class="fas fa-external-link-alt infoBtn"></i>
        <span class="post-info-pages"></span>
        <i class="far fa-bookmark infoBtn"></i>
    </div>
</div>`
};

var postComments = {
    props: ["post"],
    template: `
<div class="post-comments">
    <div class="post-comments-like">
        <span class="post-comments-likeProfile">
            <img :src="post.comments.img" alt="" class="post-comments-likeImg">
        </span>
        <span class="post-comments-likeNumber">
            <b>{{post.comments.name}}</b> 님 <b>외 {{post.comments.likeNum}}명</b>이 좋아합니다.
        </span>
    </div>
    <div class="post-comments-list">
        <div class="post-comments-item" v-for="comment in post.commentsList">
            <span class="post-comments-itemName">
                {{comment.name}}
            </span>
            <span class="post-comments-itemContent">{{comment.content}}</span>
            <span class="post-comments-itemLike">
                <i class="far fa-heart commentsBtn" v-if="!comment.like"></i>
            </span>
        </div>
    </div>
    <div class="post-comments-date">{{post.date}}일 전</div>
</div>`
};

var postData = {
    head: {
        img: "img/profile1.png",
        name: "pigeon"
    },
    contents: [
        {
            img: "img/content1.jpg"
        }
    ],
    comments: {
        img: "img/profile2.jpg",
        name: "떼껄룩",
        likeNum: "2"
    },
    commentsList: [
        {
            name: "카짓",
            content: "이것 좀 보고 가",
            like: false
        },
        {
            name: "포로리",
            content: "나 때릴 거야?",
            like: false
        },
        {
            name: "중대장",
            content: "중대장은 실망했다",
            like: false
        }
    ],
    date: 21
};
