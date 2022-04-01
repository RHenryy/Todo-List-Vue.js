<template>
  <div>
    <form action="" method="post">
      <label for="email">email</label>
      <input name="email" type="email" placeholder="email" v-model="message.email">
      <input name="name" type="text" placeholder="text" v-model="message.name">
      <input name="phone" type="text" placeholder="text" v-model="message.phone">
    </form>
    <p v-for="items in message" v-bind:key="items.id">{{ items }}</p>

    <!-- <form action="" method="POST">
        <label for="email">Email</label> 
        <input type="email" v-model="message1" id="email"> 
        <span class="email"></span> 
        <label for="pass">Password</label> 
        <input type="password" v-model="message2" id="pass"> 
        <span class="password"></span> 
        <label for="phone">Phone</label> 
        <input type="tel" v-model="message3" id="phone"> 
        <span class="phone"></span> 
        <button type="submit">Submit</button>
    </form> -->
  </div>
</template>

<script src="./formulaireComponent.js"></script>

