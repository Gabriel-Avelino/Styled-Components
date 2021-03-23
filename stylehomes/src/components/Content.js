import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
background-color: #ffa;
display: Flex;
justifty-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;
`

const ContentItem = styled.p `
color: #000;
text-align: center;
width: 100%;
padding: 10px;
box-sizing: border-box;
margin: 40px;
`

function content() {
  return (
    <React.Fragment>
      <Content>
        <ContentItem>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum a est non vestibulum. Etiam est purus, cursus eget auctor ut, suscipit sed metus. Morbi id porta dolor, quis imperdiet purus. Sed ac nunc ut lectus convallis euismod. Duis laoreet urna risus, sit amet dictum odio consequat condimentum. Sed ut sem id urna consectetur aliquet a non velit. 
            Vivamus mollis placerat lacinia. Nulla ac condimentum nibh. Sed faucibus turpis volutpat odio luctus, eu vehicula sem ornare. Quisque consectetur ut quam efficitur fringilla. Suspendisse et felis luctus, convallis augue tempus, placerat nunc. Etiam accumsan luctus metus, non vehicula sem pulvinar id. 
            Aliquam at elit rhoncus ex posuere sagittis vitae ac elit. Integer semper arcu a justo dapibus, faucibus lobortis urna pellentesque.
          </p>  
        </ContentItem>
        <ContentItem>
          <p>
            Maecenas rutrum vel dui non convallis. Suspendisse a cursus dui. Integer rutrum posuere vehicula. Aliquam erat volutpat. Proin pulvinar gravida lacus, non ultricies lacus. Aliquam nec mi feugiat enim consectetur suscipit. Pellentesque nec ipsum tincidunt, volutpat lectus commodo, iaculis lacus. Duis ac tempus turpis.
            Sed non commodo quam. Duis turpis nisl, congue eget pretium nec, eleifend id quam. Vivamus lobortis eros nec purus placerat, ac eleifend diam sollicitudin. Vestibulum efficitur orci vitae nunc sollicitudin egestas. Fusce sit amet malesuada lectus. Integer vel turpis sed erat consequat ultrices. Cras nibh nisl, eleifend at vulputate in, mattis vitae est. Morbi vitae mauris justo. Quisque at maximus sem.
          </p>
        </ContentItem>
      </Content>
    </React.Fragment>
  )
}

export default content;