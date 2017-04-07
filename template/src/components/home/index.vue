<template>
  <mn-scroller>
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
          <mn-btn :icon="chatbubbleWorking" theme="primary" @click="bubble">Start</mn-btn>
          <mn-btn theme="secondary-link" @click="$router.push({ name: 'signIn' })">Sign in</mn-btn>
        </mn-col>
      </mn-cols>
    </mn-section>
  </mn-scroller>
</template>

<script>
  import chatbubbleWorking from 'vue-human-icons/js/iconic/chatbubble-working'
  import Message from 'vue-human/util/Message'

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
          Message.create({ show: true, description: 'Hi, bubble!' }).show()
        }, 800)
      }
    }
  }
</script>
