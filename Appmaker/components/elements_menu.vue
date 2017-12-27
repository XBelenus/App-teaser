<template>
    <div class="elements_menu">
        <div>
            <ul>
                <li>Menu elements</li>
                <li>Profil</li>
                <li>Projets</li>
                <li>Amis</li>
                <li>Options bonus</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'elementsMenu'
    }
</script>

<style>
    .elements_menu{
        background-color: rgba(255,255,200,1);
        height: inherit;
        padding:3%;
    }
    .elements_menu ul li{
        list-style: none;
        text-decoration: underline;
    }
    .elements_menu ul {
        padding:0;
    }
    .elements_menu img{
        width:200px;
        height:200px;
    }
</style>