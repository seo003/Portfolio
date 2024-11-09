<script setup>
import { skillText } from "../constants";
</script>

<template>
  <section id="skill">
        <div class="skill_inner">
            <h2 class="skill_title">
                Skills
                <!-- add .left and/or
                <span class="arrow left right"> 
                  <span class="head"></span>
                </span>	 -->
            </h2>
            <div class="skill_desc">
                <div v-for="(skill, key) in skillText" :key="key">
                    <!-- <span>{{ key+1 }}.</span> -->
                    <h3>{{ skill.title }}</h3>
                    <p>{{ skill.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
$arrow-thickness: 3px;
$arrow-head-size: 10px;
$arrow-length: 100%; /*$arrow-head-size * 5*/
$arrow-color: #292B30;

.arrow {
	height: $arrow-thickness;
	width: $arrow-length;
	background: $arrow-color;
	display: inline-block;
	position: relative;

	&.left:before, &.right:after {
		content: "";
		display: block;
		width: $arrow-head-size;
		height: $arrow-head-size;
		position: absolute;
		border: $arrow-thickness solid $arrow-color;      
	}

	&.left {
		&:before {
			transform: rotate(45deg) translateY(-55%);
			left: -$arrow-thickness * 2;
			border-top: 0;
			border-right: 0;
		}
	}

	&.right {
		&:after {
			transform: rotate(45deg) translateY(-55%);
			right: $arrow-thickness * 2;
			border-bottom: 0;
			border-left: 0;
		}
	}

}
#skill h3 {
  position: static;
  /* sticky를 해제 */
}
.skill_inner {
    padding: 12%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px){ 
        flex-direction: column;
    }

    .skill_title {
        position: sticky;
        top: 70px;
        left: 0;
        width: 48%;
        height: 5vw;
        font-size: 4vw;
        font-weight: 900;
        line-height: 1.6;
        font-family: var(--mainKor-font);
        text-transform: uppercase;
        color: var(--black100);
        border-bottom: 0.4vw solid var(--black100);
        text-decoration:underline;

        @media (max-width: 800px){ 
            width: 100%;
            margin-bottom: 10vw;
            font-size: 30px;
            height: auto;
            top: 68px;
            background-color: var(--mainBg-color);
        }

        em {
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 2;
        }
    }
    .skill_desc {
        width: 50%;

        @media (max-width: 800px){ 
            width: 100%;
        }

        span {
            font-size: 5vw;
            line-height: 1;
            font-weight: 900;
            line-height: 1.3;
            font-family: var(--mainNum-font);

            @media (max-width: 800px){ 
                font-size: 20vw;
            }
        }
        h3 {
            font-size: 1.5rem;
            text-decoration: underline;
            text-underline-position: under;
            margin-bottom: 1vw;
        }
        p {
            margin-bottom: 10vh;
            font-size: 1.1rem;
        }
    }
}
</style>