<template>
  <mn-form :validate="$v" @success="success">
    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-label :validate="$v.models.username">Username</mn-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-input v-model="models.username" placeholder="Phone / Email / Username"></mn-input>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-prefix>
            <mn-label :validate="$v.models.password">Password</mn-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-input type="password" v-model="models.password" placeholder="Password"></mn-input>
          </mn-card-body>
        </mn-card-item>
      </mn-card>

      <mn-section-note>
        Your username (phone, email or username)
        <mn-helper :validate="$v.models.username">
          <mn-helper-item name="required">Require username</mn-helper-item>
          <mn-helper-item name="minLength">username need to be more than 4</mn-helper-item>
          <mn-helper-item name="maxLength">username need to be less then 100</mn-helper-item>
        </mn-helper>
        <mn-helper :validate="$v.models.password">
          <mn-helper-item name="required">Require password</mn-helper-item>
          <mn-helper-item name="minLength">Password need to be more than 6</mn-helper-item>
          <mn-helper-item name="maxLength">Password need to be less then 20</mn-helper-item>
        </mn-helper>
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-btn theme="primary" margin ref="submit">Sign in</mn-btn>
    </mn-section>
  </mn-form>
</template>

<script>
  import {
    required,
    minLength,
    maxLength } from 'vuelidate/lib/validators'

  export default {
    validations: {
      models: {
        username: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(100)
        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20)
        }
      }
    },

    data () {
      return {
        models: {
          username: undefined,
          password: undefined
        }
      }
    },

    methods: {
      success ($event, form) {
        form.loading = true
        this.$refs.submit.loading = true

        this.$store.dispatch('user.signIn', this.models).then(response => {
          form.loading = false
          this.$refs.submit.loading = false
        }).catch(error => {
          console.log('in.vue', error)
        })
      }
    }
  }
</script>
