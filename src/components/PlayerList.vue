<template>
  <div class="paper">
    <div>
      <slot></slot>
    </div>
    <div class="player-list">
      <div v-for="player, index in players">
        <h3 class="subtitle is-marginless is-hidden-mobile">
          <span class="help">{{index + 1}}. </span>
          {{player.name}}
        </h3>
        <h3 class="subtitle is-hidden-tablet">
          <span class="help">{{index + 1}}. </span>
          {{player.name}}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'playerlist',

  props: {
    'players': Array,
    'fullHeight': {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
    }
  }

}
</script>

<style scoped lang="scss">
  .paper {
    position: relative;
    max-width: 600px;
    max-height: 74vh;
    margin: auto;
    font-family: 'Kaushan Script', cursive;
    background-image: url('../assets/paper.png');
    background-repeat: no-repeat;
    background-attachment: local;
    background-position: top center;
    background-size: contain;
    padding: 30px;


    .help {
      font-variant: small-caps;
    }
    .player-list {
      padding-top: 10px;
      height: 500px;
      overflow: auto;
      text-align: center;
      .help {
        display: inline-block;
      }
      .subtitle{
        &.is-hidden-mobile{
          font-size: 2em;
        }
        &.is-hidden-tablet {
          font-size: 5.7vw;
        }
        color: #000021db;
      }
    }
    img {
      display: block;
      margin: auto;
      max-height: 900px;
    }
  }
</style>