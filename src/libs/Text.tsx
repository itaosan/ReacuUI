import { VFC } from "react"
import styled from "styled-components"
import { fontSize } from "./constants"

const Wrapper = styled.p`
    font-size: ${fontSize.m}
`
type Props = {
    text : string
    className? : string
}

export const Text: VFC<Props> = ({ text,className ='' }) => {
    return <Wrapper className={className}>{text}</Wrapper>
}

export const LargeText: VFC<{text :string}>= ({text}) => {
    return <StyledText text={text} />
}

const StyledText = styled(Text)`
    font-size: 2.0rem;
`