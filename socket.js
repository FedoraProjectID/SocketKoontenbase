const { KontenbaseClient } = require('@kontenbase/sdk')

const kontenbase = new KontenbaseClient({ apiKey: 'd11e834d-5663-4415-9bee-cfb371e77a2e' })

kontenbase.realtime.subscribe('NewMachine', { event: 'UPDATE_RECORD' }, (message) => {
    if (message.error) {
      console.log(message.error)
      return
    }
  
    console.log(message.event, message.payload)
  })