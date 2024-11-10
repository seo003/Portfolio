<script setup>
import { skillText } from "../constants";
</script>

<template>
    <section id="skill">
        <div class="skill_inner">
            <h2 class="skill_title">
                Skills
            </h2>
            <div>
                <article class="paper">
                    <div class="content_wrapper" v-for="(skill, index) in skillText" :key="index">

                        <section class="content">
                            <div class="row">
                                <div class="content_cat">
                                    <h3>{{ skill.title }}</h3>
                                </div>
                                <div class="content_text">
                                    <ul>
                                        <li v-for="(word, idx) in skill.desc.split(',')" :key="idx">
                                            <span v-if="idx % 3 === 0">{{ word.trim() }}</span>
                                            <span v-if="idx % 3 !== 0">{{ word.trim() }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </div>

                </article>

            </div>
        </div>
    </section>

</template>

<style lang="scss">
.paper {
    margin: 8% 8%;
    background-color: white;
    padding: 0.5em 0;
    border: 1px solid #e0e0e0;
    border-bottom-width: 3px;
    border-radius: 1%;
    box-shadow: 7px 7px 20px -10px #000;
}

/* Content */
.content {
    display: table;
    width: 100%;
    padding-top: 1.5em;

    &:last-child {
        padding-bottom: 1.5em;
    }

    .row {
        display: table-row;

        div {
            display: table-cell;
        }
    }
}

.content_cat {
    letter-spacing: 1px;
    text-align: center;
    vertical-align: middle;
    width: 36.66%;
}

.content_text {
    border-left: 1px solid #e0e0e0;
    

    .big-text {
        vertical-align: top;
        padding-top: 1.25em;
    }

    ul {
        padding: 0;
        width: 85%;
        margin-left: 1.5em;
        justify-content: center;

        li {
            font-size: 0.7em;
            display: inline-block;
            width: 30%;
            color: #424242;
            font-weight: 600;
            font-size: 1em;
            text-align: center;
            padding-top: 1%;

            a {
                text-decoration: none;
                color: #0277bd;
            }
        }
    }
}


#skill h3 {
    position: static;
}

.skill_inner {
    padding: 1% 12%;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;
    }

    .skill_title {
        position: sticky;
        top: 70px;
        left: 0;
        height: 5vw;
        font-size: 4vw;
        font-weight: 900;
        line-height: 1.4;
        font-family: var(--mainKor-font);
        text-transform: uppercase;
        color: var(--black100);
        border-bottom: 5px solid black;
        z-index: 1;
        margin-bottom: 0px;

        @media (max-width: 800px) {
            width: 100%;
            margin-bottom: 10vw;
            font-size: 30px;
            height: auto;
            top: 68px;
            background-color: var(--mainBg-color);
        }
    }
}
</style>