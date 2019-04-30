<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORT STORE</a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 bg-info p-2">
                <CategoryControls />
            </div>
            <div class="col-md-9 p-2"> 
                <product-list />
            </div>
        </div>
    </div>
</template>
<script>
import ProductList from "./ProductList.vue";
import CategoryControls from "./CategoryControls"
export default {
    components:{
        ProductList,
        CategoryControls
    }
}
</script>


