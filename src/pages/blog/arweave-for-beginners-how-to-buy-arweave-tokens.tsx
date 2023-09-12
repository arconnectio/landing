import Footer from "~/components/Footer";

import { ImageContainer, Title, Wrapper } from "./index";
import Section from "~/components/content/Section";
import Image from "next/image";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import { CalendarIcon } from "@iconicicons/react";
import { Date, Paragraph, Subtitle } from "~/components/content/Text";
import styled from "styled-components";

export default function BlogPost() {
  return (
    <>
      <Head title="Blog - ArConnect Arweave Wallet" />
      <Nav />
      <main>
        <Section>
          <Date padding="17px 0px" secondary>
            <CalendarIcon />
            Jul 7, 2023
          </Date>
          <Title style={{ paddingBottom: "27px" }}>
            Arweave for Beginners: How to Buy Arweave Tokens
          </Title>
          {/* TODO: update this */}
          {/* <Subtitle>
            A guide on the different ways to purchase AR Tokens
          </Subtitle> */}
          <AuthorGroup>
            <Image
              src="/logo.png"
              alt="ArConnect hedgehog logo"
              draggable={false}
              width={56}
              height={56}
            />
            <div>
              <AuthorText>Matthew DiRienzo</AuthorText>
              <AuthorText secondary fontSize="16px" fontWeight={600}>
                {/* 8 min read */}
                Chief Product Officer
              </AuthorText>
            </div>
          </AuthorGroup>
          <ImageContainer style={{ padding: "27px 0" }}>
            <Image
              src="/arweave-for-beginners-hero.webp"
              alt="Othent logo"
              draggable={false}
              width={728}
              height={473}
            />
          </ImageContainer>
        </Section>
        <BlogSection>
          <Paragraph>
            One of the main things needed for a long road trip is gas in the
            tank. The same thing applies when you are using most Arweave
            applications. When you make a transaction on an Arweave application,
            you need a little gas to make the transaction go. In the case of
            Arweave applications, the “gas” is Arweave Tokens (AR). The good
            news is that you will only need a very, very small amount of gas.
          </Paragraph>
          <Paragraph>
            If you are experiencing Arweave for the first time, here is a guide
            on the different ways to purchase AR Tokens.
          </Paragraph>
          <BlogSubtitle>Before you get started</BlogSubtitle>

          <List unstyled>
            <ListItem>1. You are going to need an Arweave account</ListItem>
            <ListItem>2. You are going to need your Arweave address</ListItem>
            <ListItem>3. Payment method to purchase tokens</ListItem>
            <ListItem>4. Identification (if necessary)</ListItem>
          </List>
          <Paragraph>
            Please note, some services below may require you to provide
            additional information such as a photo identification or other
            information to authenticate you. Also, depending on your selected
            payment method, you may need to contact your payment provider to use
            services. The necessity of these steps vary per service. volutpat.
          </Paragraph>
          <Subtitle>On ramp services</Subtitle>
          <Paragraph>
            In general, on ramp services are the most straightforward way to
            purchase AR Tokens. Most services accept multiple currencies and
            allow purchases with debit/credit cards, wire transfer, or other
            local payment methods.
          </Paragraph>
          <Paragraph>
            The process of using one of these services is pretty simple: sign up
            for an account, create your purchase order, enter in your Arweave
            account number, and finally, pay. Once your transaction is
            finalized, the on ramp service will send your AR Tokens to the
            Arweave account number you provided. For example, if you are using
            ArConnect for your Arweave account, the on ramp service will send
            the AR Tokens to ArConnect.
          </Paragraph>
          <Paragraph>Some onramp services that support AR Token are:</Paragraph>
          <List>
            <ListItem>
              <a href="https://onramper.com/try">Onramper</a>
            </ListItem>
            <ListItem>
              <a href="https://global.transak.com/">Transak</a>
            </ListItem>
          </List>
          <Paragraph>
            Unfortunately, for United States residents, no onramp service
            supports the U.S., yet. Always make sure you check the{" "}
            <a href="https://transak.com/global-coverage">
              services country support list
            </a>{" "}
            before trying to use the service.
          </Paragraph>
          <Subtitle>Centralized exchanges</Subtitle>
          <Paragraph>
            AR Tokens are available on more centralized exchanges than other
            services, like onramps. Unlike onramps, purchasing AR Tokens from a
            centralized exchange isn’t as simple. There will be a few additional
            steps you need to complete.
          </Paragraph>
          <Paragraph>
            You will most likely need to purchase another token first and swap
            that for AR Tokens. Purchasing stablecoins like USDC or USDT is the
            easiest option for a token to swap for AR Tokens. For example, if
            you wanted to use the service, SimpleSwap, here are all the steps
            needed to end up with AR Tokens:
          </Paragraph>
          <List>
            <ListItem>Buy USDC on Coinbase with fiat</ListItem>
            <ListItem>Create USDC to AR token trade on SimpleSwap</ListItem>
            <ListItem>
              Send USDC from Coinbase to the deposit address provided by
              SimpleSwap
            </ListItem>
            <ListItem>
              SimpleSwap completes swap and you receive AR tokens to your
              preferred AR address
            </ListItem>
          </List>
          <Paragraph>
            The process will be similar to the on ramp services with some
            additional steps: Sign up for an account, make a deposit into your
            account, purchase tokens that can be swapped for AR Tokens, swap
            tokens for AR Tokens, send AR Tokens to your Arweave account like
            ArConnect or some other similar solution.
          </Paragraph>
          <Paragraph>
            Examples of centralized exchanges that support AR Token are:
          </Paragraph>
          <List>
            <ListItem>
              <a href="https://www.binance.com/en">Binance</a>
            </ListItem>
            <ListItem>
              <a href="https://simpleswap.io/">SimpleSwap</a>
            </ListItem>
            <ListItem>
              <a href="https://www.kucoin.com/">KuCoin</a>
            </ListItem>
            <ListItem>
              <a href="https://www.gate.io/">Gate.io</a>
            </ListItem>
            <ListItem>
              <a href="https://www.huobi.com/en-us/">Huobi</a>
            </ListItem>
          </List>
          <Paragraph>
            Centralized exchanges may or may not be supported in your country of
            residence.
          </Paragraph>
          <Subtitle>Alternative services</Subtitle>
          <Paragraph>
            One alternative service that blends the on ramp service with the
            exchange to make an all in one solution is{" "}
            <a href="https://everpay.io/">everPay</a>. With everPay, you
            purchase the USDC token and then swap that for AR Tokens. A nice
            feature is everPay supports multiple Arweave account options. For
            example, if you are using ArConnect, you can connect that account to
            the everPay platform for direct deposit of the AR Tokens.
          </Paragraph>
          <Paragraph>
            The{" "}
            <a href="https://everpay.zendesk.com/hc/en-us/articles/18677901470617-How-to-use-legend-to-buy-crypto-currency-">
              {" "}
              process for using everPay{" "}
            </a>
            is slightly different than the other options: Connect your account /
            wallet to the everPay platform, buy USDC tokens, swap USDC for AR
            Tokens, done.{" "}
          </Paragraph>
          <Paragraph>
            everPay has close to worldwide support for their services.
          </Paragraph>
          <Subtitle>One more thing</Subtitle>
          <Paragraph>
            Whenever using a new service for the first time, please do your
            research and read through any guides before using so you understand
            all the required steps. Each service is going to have different
            rates and prices so make sure to review the details of any purchase
            or swap. Most importantly, no service will need your Arweave account
            seed phrase or recovery information. If requested, do not provide it
            and do not use the service.
          </Paragraph>
          <Paragraph>
            Regardless of which method above you used to get your AR Tokens,
            once they are in your Arweave account, you are all set up to use
            Arweave applications. You can then decide to
            <a href="https://www.communitylabs.com/blog/arweave-for-beginners-getting-started">
              {" "}
              discover a new Arweave application
            </a>{" "}
            or view all the new art on{" "}
            <a href="https://artby.city/discover">Art By City</a>.
          </Paragraph>
          <Paragraph>
            If you have any questions or need help, please feel free to reach
            out to us here at{" "}
            <a href="https://www.communitylabs.com/contact-us">
              Community Labs
            </a>{" "}
            via our contact page or in our{" "}
            <a href="https://discord.gg/UaBMt24yka">Discord</a>.
          </Paragraph>
        </BlogSection>
      </main>
      <Footer />
    </>
  );
}

const List = styled.ul<{ unstyled?: boolean }>`
  list-style-type: ${(props) => props.unstyled && "none"};
`;

// TODO:
const ListItem = styled.li`
  ${Paragraph};
  font-size: 1.05rem;
  font-weight: 550;

  a {
    color: rgb(${(props) => props.theme.accent});
    text-decoration: none;
    cursor: pointer;
  }
`;

const BlogSubtitle = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  color: rgb(${(props) => props.theme.secondaryText});
  margin: 0;
`;

const BlogSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AuthorText = styled.p<{
  fontWeight?: number;
  fontSize?: string;
  secondary?: boolean;
}>`
  color: ${(props) =>
    props.secondary ? `rgb(${props.theme.secondaryText})` : "#000"};
  margin: 0;
  a {
    color: rgb(${(props) => props.theme.accent});
    text-decoration: none;
    cursor: pointer;
  }
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || 700};
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;
