<template>
	<nav class="btn-group btn-group-small">
		<h3 :class="['btn-group-cell', { active: sexType === 'male' }]" @click="changSex('male')"><a href="javascript:;" class="sex1 btn-tab">男生</a></h3>
		<h3 :class="['btn-group-cell', { active: sexType === 'female' }]" @click="changSex('female')"><a href="javascript:;" class="sex2 btn-tab">女生</a></h3>
	</nav>
</template>

<script>

export default {
	name: 'header',
	props: {
		sex: {
			type: String,
			default: ''
		}
	},
	created(){
		this.changSex('male')
	},
	data() {
		return {
			sexType: ''
		};
	},
	methods: {
		changSex: function (sex) {
			this.sexType = sex;
		}

	}
}
</script>

<style lang="less">

	.btn-group-cell {
		width: 1rem;
		height: .45rem;
		line-height: .45rem;
		font-size: 100%;
		font-weight: 400;
		display: table-cell;
		text-align: center;
		border: 1px solid #ed424b;
			&.active {
				background-color: #ed424b;
			a{color: #fff !important;}
		}

	}

</style>
