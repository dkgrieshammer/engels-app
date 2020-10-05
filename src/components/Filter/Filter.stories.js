import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from './Card/Card';
import { Head } from './Head/Head';
import { Section } from './Section/Section';
import { Searchbar } from './Search/Search';
import { List, ListElement, CheckboxElement, ColorCheckElement } from './List/List'

export default {
  title: 'Elements/Filter'
}


export const Default = () => (
<div style={{width:'350px'}}>
  <Card>
      <Head>Filter Box</Head>
      <Section title="Sektion 1">
        <List>
          <ColorCheckElement color='#BB6BD9'>Curabitur blandit tempus porttitor</ColorCheckElement>
          <ColorCheckElement color='#6FCF97'>Vestibulum id ligula porta felis euismod semper.</ColorCheckElement>
          <ColorCheckElement color='#F2994A'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</ColorCheckElement>
          <ColorCheckElement color='#EB5757'>Cras Adipiscing Malesuada</ColorCheckElement>
          <ColorCheckElement color='#56CCF2'>Ornare Tristique</ColorCheckElement>
        </List>
      </Section>
      <Section title="Sektion 2">
        <List>
          <ColorCheckElement color='#E7CA2A'>Fermentum Amet Dapibus</ColorCheckElement>
          <ColorCheckElement color='#BB6BD9'>Vehicula</ColorCheckElement>
          <ColorCheckElement color='#6FCF97'>Cras Fringilla Tristique Ligula</ColorCheckElement>
          <ColorCheckElement color='#F2994A'>Amet Inceptos Magna Tortor Dapibus</ColorCheckElement>
          <ColorCheckElement color='#EB5757'>Risus Euismod</ColorCheckElement>
        </List>
      </Section>
  </Card>
</div>
)

export const CardBox = () => <Card>Card Content</Card>

export const CardHead = () => <Head onClose={action('close clicked')}>Toolbox</Head>

export const CardSection = () => <Section title="Test">Insert Elements here</Section>

export const CardSearch = () => <Searchbar onChange={action('Content updated')} onEnter={action('Search clicked')} />

export const CardList = () => (
  <List>
    <ListElement callback={action("List Element Clicked")}>Lorem Ipsum dolor sit amet al deliatur</ListElement>
    <CheckboxElement>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</CheckboxElement>
    <ColorCheckElement>Curabitur blandit tempus porttitor</ColorCheckElement>
  </List>
)