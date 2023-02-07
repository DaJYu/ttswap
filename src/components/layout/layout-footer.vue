<template>
    <div id="layout-footer">
        <div class="footer-main">
            <div style="display: none;" class="footer-item" v-if="socials.length">
                <div v-for="item in socials" :key="item.id"><a target="_blank" class="out-link" :href="item.href"><i class="iconfont" :class="item.icon"></i>{{item.title}}</a></div>
            </div>
            <div class="footer-item">
                <div class="footer-title">{{$t("main.footer.h1.title")}}</div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h1.p1.href')">{{$t("main.footer.h1.p1.name")}}</a></div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h1.p2.href')">{{$t("main.footer.h1.p2.name")}}</a></div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h1.p3.href')">{{$t("main.footer.h1.p3.name")}}</a></div>
            </div>
            <div class="footer-item">
                <div class="footer-title">{{$t("main.footer.h2.title")}}</div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h2.p1.href')">{{$t("main.footer.h2.p1.name")}}</a></div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h2.p2.href')">{{$t("main.footer.h2.p2.name")}}</a></div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h2.p3.href')">{{$t("main.footer.h2.p3.name")}}</a></div>
            </div>
            <div class="footer-item">
                <div class="footer-title">{{$t("main.footer.h3.title")}}</div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h3.p1.href')">{{$t("main.footer.h3.p1.name")}}</a></div>
                <div><a target="_blank" class="out-link" :href="$t('main.footer.h3.p2.href')">{{$t("main.footer.h3.p2.name")}}</a></div>
            </div>
        </div>
        <div class="copyright">Copyright © 2022 TTSwap</div>
    </div>
</template>

<script>
    export default {
        name: "layout-footer",
        data(){
            return{
                socials: []
            }
        },
        components:{
            
        },
        computed:{
            // runTimeInterval() {
            //     return this.$store.state.runTimeInterval;
            // }
        },
        methods:{
            getSocial(){
                this.$store.dispatch('getSocials').then(data =>{
                    this.socials = data
                })
            },
        },
        created(){
            this.getSocial();
            this.$store.dispatch('initComputeTime');
        }
    }
</script>

<style scoped lang="less">
#layout-footer{
    padding: 4%;
    // border-top: 1px solid #F7F7F7;
    font-size: 13px;
    color: #696868;
	background-color: #FFFFFF;
    a.out-link:hover{
        color: #ff6d6d;
    }
    .footer-main{
        max-width: 800px;
        margin: 0 auto 20px auto;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .footer-item{
            flex: 1;
            & > div:not(:last-child){
                margin-bottom: 10px;
            }
            i{
                margin-right: 10px;
            }
        }
		.footer-title {
		    font-size: 17px;
		    font-weight: bold;
		    color: #000000;
			margin-bottom: 16px !important;
		}
    }
    .copyright{
        text-align: center;
    }
}
    /*****/
    @media (max-width: 800px){
        #layout-footer{
            .footer-main .footer-item:nth-child(3){
                flex: 2;
            }
        }
    }
    @media (max-width: 600px){
        #layout-footer{
            .footer-main {
                display: block;
                .footer-item{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    & > div{
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    /*****/
</style>