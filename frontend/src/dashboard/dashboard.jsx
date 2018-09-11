import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" subtitle="Versão 1.0"/>
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank" 
                value="R$ 10,00" text="Total de créditos"/>

            <ValueBox cols="12 4" color="red" icon="credit-card" 
                value="R$ 10,00" text="Total de Débitos"/>

            <ValueBox cols="12 4" color="blue" icon="money" 
                value="R$ 10,00" text="Valor consolidado"/>      
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard