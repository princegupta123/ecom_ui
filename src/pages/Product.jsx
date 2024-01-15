import styled from 'styled-components';

const Container = styled.div``
const Wrapper = styled.div`
padding : 50px;
display: flex;
`
const ImageContainer = styled.div`
flex: 1;
`

const Image = styled.img``

const InfoContainer = styled.div`
flex: 1;
`

const Title = styled.p``

const Desc = styled.p``

const Price = styled.span``



const Product = () => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src='/images/shop-icon.png' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Best Clothes Under 1000</Title>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Desc>
                    <Price> $50 </Price>
                </InfoContainer>

            </Wrapper>
        </Container>
    )
}

export default Product