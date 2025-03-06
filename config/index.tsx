import { type Config } from "@measured/puck";
import { HeadingBlock, HeadingProps } from "./Blocks/HeadingBlock";
import { Flex, FlexProps } from "./Blocks/Flex";
import { Grid, GridProps } from "./Blocks/Grid";
import { Space, SpaceProps } from "./Blocks/Space";
import { TextBlock, TextProps } from "./Blocks/TextBlock";
import { Button, ButtonProps } from "./Blocks/Button";
import { Header, HeaderProps } from "./Blocks/Header";
import { Hero, HeroProps } from "./Blocks/Hero";
import { Card, CardProps } from "./Blocks/Card";

type Props = {
    HeadingBlock: HeadingProps;
    TextBlock: TextProps
    Flex: FlexProps;
    Grid: GridProps;
    Space: SpaceProps;
    Button: ButtonProps;
    Header: HeaderProps;
    Hero: HeroProps;
    Card: CardProps;
};

export const config: Config<Props> = {
    categories: {
        layout: {
            components: ['Flex', 'Grid', 'Space']
        },
        typography: {
            components: ['HeadingBlock', 'TextBlock']
        },
        action: {
            components: ['Button']
        },
        other: {
            components: ['Header', 'Hero', 'Card']
        }
    },
    components: {
        HeadingBlock,
        TextBlock,
        Flex,
        Grid,
        Space,
        Button,
        Header,
        Hero,
        Card
    }
};

export default config;
