<template>
  <div class="admin-pages">
      <pageTitle icon="fa fa-cogs" main="Administração do Sistema"
        sub="Cadastros e Cia" />
    <div class="admin-pages-tabs">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Artigos" active>
                    <ArticleAdmin />
                </b-tab>
                <b-tab title="Categorias">
                    <CategoryAdmin />
                </b-tab>
                <b-tab title="Usuarios">
                    <UserAdmin />
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'

export default {
    name: 'AdminPages',
    components: {PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin}
}
</script>

<style>

</style>