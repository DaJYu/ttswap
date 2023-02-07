<!-- 首页广告组件 -->
<template>
	<div id="banner" :class="{'home-banner':isHome}">
		<template>
			<el-carousel :interval="5000" arrow="always" :height="height+'px'">
				<el-carousel-item v-for="dataList in dataList" :key="dataList.id">
					<!-- <h3>{{ dataList.name }}</h3> -->
					<router-link :to="dataList.href"><img class="" :src="dataList.url"></router-link>
				</el-carousel-item>
			</el-carousel>
		</template>
	</div>
</template>

<script>
	export default {
		name: "banner",
		data() {
			return {
				websiteInfo: {},
				socials: [],
				height: 400,
				dataList: []
			}
		},
		props: {
			src: {
				type: String,
				default: 'https://s1.ax1x.com/2020/05/23/YxaLMq.jpg'
			},
			isHome: {
				type: [Boolean, String],
				default: false
			}
		},
		created() {
			// this.getWebSiteInfo()
			// this.getSocial()
			this.getWidht()
			this.getDataList()
		},
		methods: {
			// getSocial(){
			//     this.$store.dispatch('getSocials').then(data =>{
			//         this.socials = data
			//     })
			// },
			// getWebSiteInfo(){
			//     this.$store.dispatch('getSiteInfo').then(data =>{
			//         this.websiteInfo = data
			//     })
			// },
			getWidht() {
				let w = document.body.clientWidth
				if (w < 720) {
					this.height = 200
				}
			},
			getDataList() {
				this.$http({
					url: this.$http.adornUrl("/gg"),
					method: "get",
					// params: this.$http.adornParams({
					//   page: this.pageIndex,
					//   limit: this.pageSize,
					//   key: this.dataForm.key
					// })
				}).then(({
					data
				}) => {
					console.log(data.data)
					this.dataList = data.data
					// if (data && data.code === 0) {
					//   this.dataList = data.page.list;
					//   this.totalPage = data.page.totalCount;
					// } else {
					//   this.dataList = [];
					//   this.totalPage = 0;
					// }
					// this.dataListLoading = false;
				});
			}
		}
	}
</script>

<style scoped lang="less">
	#banner {
		position: relative;
		// margin-top: 60px;
		width: 100%;
		height: 400px;

		.banner-img {
			width: inherit;
			height: inherit;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			transition: all 0.2s linear;
			overflow: hidden;

			&:hover {
				transform: scale(1.1, 1.1);
				filter: contrast(130%);
			}
		}
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 400px;
		margin: 0;
		text-align: center;
	}

	.el-carousel__item img {
		width: 100%;
		height: 100%;
		margin: 0;
		text-align: center;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	@media (max-width: 960px) {
		#banner {
			height: 400px;
		}
	}

	@media (max-width: 720px) {
		#banner {
			height: 200px;

		}

		.el-carousel__container button {
			z-index: 5;
		}

		.el-carousel__item h3 {
			line-height: 200px;
			text-align: center;
		}
	}
</style>
