import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { onSubmitForm } = this.props;
    return (
      <form
        onSubmit={e => onSubmitForm(e, this.state.value)}
        className={s.form}
      >
        <button type="submit" className={s.form_btn}>
          <span>Search</span>
        </button>

        <input
          className={s.form_input}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          onChange={this.handleChangeInput}
        />
      </form>
    );
  }
}

export default Searchbar;