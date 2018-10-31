import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import { getItems, removeItem } from '../actions/items';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.dispatch(getItems());
  }

  render() {
    const { item, dispatch } = this.props; 

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {item.items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => dispatch(removeItem({ id: _id }))}
                  >
                    &times;
                </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    item: state.item
  };
};

export default connect(mapStateToProps)(ShoppingList);