  <template>
    <div class="container">
        <slot></slot>
    </div>
  </template>
  
  
  
  <script>
  import {defineComponent} from 'vue'
  
  export default defineComponent({
    name: 'CustomLayout',
  
    setup(){
  
      
  
      return {
        
      }
    }
    
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 10px;
    }
  </style>
  