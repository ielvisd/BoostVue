# stag-relayx

Wrapper around relayx javascript library providing support for stag wallet high level transaction types and onchain
actions.

## Installation

Assuming your browser already has access to relayx you can wrap it using stag.

```
npm install --save stag-relayx

import { wrapRelayx } from 'stag-relayx'

const stag = wrapRelayx(window.relayone)

const {txid, txhex, job} = await stag.boost.buy({

  content, difficulty, value

})

```

You can also fetch a job to check the status of that job

```
const job = await stag.boost.fetch({ txid })

```

### Future Features

The following methods are only specified but not yet implemented

```
const [txid, txhex] = await stag.onchain.findOrCreate({

  where: {

    app: 'powstream.com',

    type: 'add_to_favorites',

    content: {

      video_txid

    }

    author: true
  },

  defaults: {

    app: 'powstream.com'

    type: 'add_to_favorites',

    content: {

      video_txid

    },

    author: true,

  }

})

const [anypayTxid, anypayTxhex] = await stag.pay({

  url: 'https://anypayx.com/i/52101ddk',

  type: 'JsonV2'
 
})

```
