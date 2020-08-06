
import React from 'react'
import {StatefulList} from 'baseui/dnd-list';
import {useStyletron} from 'baseui'
import {StyledBaseButton,Button} from 'baseui/button';
import {withStyle} from 'baseui';
import {Spring} from 'react-spring/renderprops'

const MyButton = withStyle(StyledBaseButton, ({$theme}) => {
  return {
    color: $theme.colors.accent,
    backgroundColor:$theme.colors.backgroundNegative
  };
});

const OverRides = () => {

  
  const [css, theme] = useStyletron();
    return (
      <div>
        <MyButton>hello</MyButton>
        <div className={css({color: theme.colors.accent})}>Okay</div>    {/* theme.colors.accent is having the default colors  */}
 <StatefulList
        initialState={{
          items: ['Item 1', 'Item 2', 'Item 3'],
        }}
        overrides={{
            Label: {
              style: ({$theme}) => ({
                color: $theme.colors.warning,
              }),
            },
          }}
      />
    <Button overrides={{
               BaseButton: {
                  style: ({ $theme }) => {
                    return {
                      boxShadow: $theme.lighting.shadow700,
                      border: "1px solid #456998",
                      width: "56px",
                      height: "56px"
                    };
                  }
                }
              }}>overrides button</Button>
              <Spring
  from={{ x: 100 }}
  to={{ x: 0 }}>
  {props => (
    <svg strokeDashoffset={props.x}>
      <path d="..." />
    </svg>
  )}
</Spring>
      </div>
       
    )
}

export default OverRides
