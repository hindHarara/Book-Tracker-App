<template>
    <div class="bookclasses">
        <button type = "button" id = "create-record-button" @click = "createBookRecord()">+</button>
        <h1>Books</h1>
        <div class="table">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Book #</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author(s)</th>
                        <th scope="col">Version Num</th>
                        <th scope="col">Page num</th>
                        <th scope="col">Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.table{
    font-family: 'Inconsolata', sans-serif;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    font-size: 24px;
    /* width: auto; */
}
h1{
    color: rgb(22, 85, 136);
    font-weight: bold
}

@import url(../assets/css/bookClassesCss.css);
</style> 
<script>

export default {
    name: 'bookClasses',
}
</script>
 

