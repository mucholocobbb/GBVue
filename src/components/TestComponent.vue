<template>
    <div>
        <h1>
            Hello {{ message }} popup
        </h1>
    </div>
</template>

<script>
export default {
    props:{
        message: String 
    }
    
}
</script>