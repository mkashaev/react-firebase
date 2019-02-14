import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

const Spiner = () => (
  <Dimmer active>
    <Loader size="huge" content={"Prepearing Chat..."} />
  </Dimmer>
)

export default Spiner
