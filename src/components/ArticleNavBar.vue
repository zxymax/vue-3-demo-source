<template>
    <div class="article-nav-bar">
        <div class="nav-logo">
            <img src="../../public/gifs/y18.gif" alt="">
        </div>
        <p>Hacker News</p>
        <router-link to="/news">News</router-link>
        <router-link to="/newest">Newest</router-link>
        <router-link to="/show">Show</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>
<style scoped>
.article-nav-bar {
    background-color: rgb(255, 102, 0);
    display: flex;
    justify-content: center;
    align-items: center;
}
.article-nav-bar p {
    font-size: 1em;
    font-weight: bold;
}
.article-nav-bar a {
    margin: 10px;
    content: '|';
}
.article-nav-bar .nav-logo {
    outline: 1px solid white;
    margin: 10px;
}
</style>
