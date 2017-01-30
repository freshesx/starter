<template>
  <mn-section>
    <mn-cols>
      <mn-col tablet="ten, one" desktop="eight, two">
        <mn-letter>
          <mn-letter-body>
            <h1>Hi</h1>
            <small>I am Vue Human!</small>
          </mn-letter-body>
        </mn-letter>
        <mn-card>
          <mn-card-item>
            <mn-card-body>Hello World!</mn-card-body>
          </mn-card-item>
          <mn-card-item>
            <mn-card-body>
              Welcome to use vue tempalte with vue-human.
            </mn-card-body>
          </mn-card-item>
        </mn-card>
        <mn-btn :icon="chatbubbleWorking" type="primary" @click="bubble">Start</mn-btn>
      </mn-col>
    </mn-cols>
  </mn-section>
</template>

<script>
  import chatbubbleWorking from 'vue-human-icons/js/iconic/chatbubble-working'
  import message from 'vue-human/util/message'

  export default {
    data () {
      return {
        chatbubbleWorking
      }
    },
    methods: {
      bubble ($event, button) {
        button.loading = true
        setTimeout(() => {
          button.loading = false
          message({ show: true, description: 'Hi, bubble!' })
        }, 800)
      }
    }
  }
</script>
