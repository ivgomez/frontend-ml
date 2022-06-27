import React from "react";
import { Product } from "./Product";
import { mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import theme from "@theme";

describe("Product => ", () => {
  let wrapper: any;

  const defaultProps = {
    response: {
      author: {
        lastName: "Gomez",
        name: "Ivan Dario",
      },
      categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
      item: {
        condition: "new",
        description:
          "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. ",
        freeShipping: true,
        id: "MLA1119561622",
        picture:
          "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-O.jpg",
        price: { currency: "ARS", amount: 206249, decimals: 0 },
        soldQuantity: 25,
        title: "Apple iPhone 11 (128 Gb) - Blanco",
      },
    },
  };

  const renderWrapper = (props?: any) =>
    mount(
      <ThemeProvider theme={theme}>
        <Product {...defaultProps} {...props} />
      </ThemeProvider>
    );

  it("Product should render without errors", () => {
    wrapper = renderWrapper();
    expect(wrapper.exists()).toBeTruthy();
  });

  describe("Breadcrumbs => ", () => {
    it("should render all the breadcrumb items", () => {
      const breadcrumbs = wrapper.find("Breadcrumb");
      expect(breadcrumbs).not.toBeNull();
      expect(breadcrumbs).not.toBeUndefined();
      expect(breadcrumbs.exists()).toBe(true);
      expect(breadcrumbs.length).toBe(2);
    });

    it("should render the first breadcrumb with its right value", () => {
      const breadcrumb = wrapper.find("Breadcrumb").at(0);
      expect(breadcrumb).not.toBeNull();
      expect(breadcrumb).not.toBeUndefined();
      expect(breadcrumb.exists()).toBe(true);
      expect(breadcrumb.text()).toBe("Celulares y Teléfonos");
    });

    it("should render the second breadcrumb with its right value", () => {
      const breadcrumbs = wrapper.find("Breadcrumb").at(1);
      expect(breadcrumbs).not.toBeNull();
      expect(breadcrumbs).not.toBeUndefined();
      expect(breadcrumbs.exists()).toBe(true);
      expect(breadcrumbs.text()).toBe("Celulares y Smartphones");
    });
  });
  describe("Product Sell Info => ", () => {
    it("should display the sell info of the product", () => {
      const productSellInfo = wrapper.find("TextExtraSmall");
      expect(productSellInfo).not.toBeNull();
      expect(productSellInfo).not.toBeUndefined();
      expect(productSellInfo.exists()).toBe(true);
      expect(productSellInfo.text()).toBe("New - 25 vendidos");
    });

    it("should display the a default value for condition and sold quantity if they are undefined ", () => {
      wrapper = renderWrapper({
        ...defaultProps,
        response: { item: { condition: undefined, soldQuantity: undefined } },
      });
      const productSellInfo = wrapper.find("TextExtraSmall");
      expect(productSellInfo).not.toBeNull();
      expect(productSellInfo).not.toBeUndefined();
      expect(productSellInfo.exists()).toBe(true);
      expect(productSellInfo.text()).toBe("0 vendidos");
    });
  });
});
