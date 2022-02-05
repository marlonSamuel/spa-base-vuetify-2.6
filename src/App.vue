<template>
<v-app>
 <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Prueba
          </v-list-item-title>
          <v-list-item-subtitle>
            técnica
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :to="item.path">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  <v-app-bar app color="orange darken-3">
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard', path:'/' },
          { title: 'Personas', icon: 'mdi-checkbox-blank-circle', path:'people' }
        ],
        right: null,
  }),

  created(){
    
  },
};
</script>
