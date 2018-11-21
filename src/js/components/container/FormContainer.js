// @flow
import React, { Component } from "react";
import Input from "../presentational/Input";
import User from "../../../user";

type Props = {
  seoTitle?: string,
};

type State = {
  seoTitle: string,
}

class FormContainer extends Component<Props, State> {
  static defaultProps = {
    seoTitle: "",
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      seoTitle: props.seoTitle || "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event: Event) => {
    if (!(event instanceof window.HTMLInputElement)) {
      return;
    }
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seoTitle } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seoTitle"
          type="text"
          id="seoTitle"
          value={seoTitle}
          handleChange={this.handleChange}
        />
        <User id="2" />
      </form>
    );
  }
}

export default FormContainer;
