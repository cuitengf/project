<template>
    <div class="foot">
        <div class="container">
            <div>© 联系我: 719653622(wx/QQ)</div>
            <div>
                <ul class="clearfix">
                    <li 
                    v-for="(item, index) in list" :key="index"
                    class="item"
                    >
                        {{item.item}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Foot',
        data(){
            return{
                list: [
                    {item: '主页底部'},
                    {item: '主页底部'},
                    {item: '主页底部'},
                    {item: '主页底部'}
                ]
            }
        }
    }
</script>

<style scoped>
.foot{
    margin-top: 1.25rem;
}
.container{
    display: flex;
    justify-content: space-between;
    font-size: 0.9375rem;
    border-top: 1px dashed #ddd;
    padding: 0.625rem 0;
}
.container .item{
    float: left;
}
</style>