# CCT Light popup card (homekit style)

Popup card for lovelace that has a temperature and brightness slider to control lights.

![Alt Text](https://i.imgur.com/CD9nnLE.gif)

## Configuration

### Installation instructions

**Manual installation:**
Copy /dist/cct-popup-card.js into /www/community/cct-popup-card inside of your Home Assistant config folder. Add the following to your configuration.yaml:

```yaml
resources:
  url: /local/cct-popup-card.js
  type: module
```

### Main Options

| Name | Type | Required | Default | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | string | **Required** |  | Entity of the light |
| `icon` | string | optional | `mdi:lightbulb` | It will use customize entity icon or from the config as a fallback it used lightbulb icon |
| `fullscreen` | boolean | optional | true | If false it will remove the pop-up wrapper which makes it fullscreen |
| `hideIcon` | boolean | optional | true | hide icon above slider or switch |
| `hideState` | boolean | optional | true | hide state above slider or switch |
| `offStates` | array | optional | - "off" | Array of states that will make the switch appear to be off |
| `onStates` | array | optional | - "on" | Array of states that will make the switch appear to be on |
| `actions` | object | optional | `actions:`  | define actions that you can activate from the pop-up. |
| `actionSize` | string | optional | `50px`  | Set the size of the action buttons default `50px` |
| `actionsInARow` | number | optional | 3 | number of actions that will be placed in a row under the brightness slider |
| `brightnessWidth` | string | optional | 150px | The width of the brightness slider |
| `brightnessHeight` | string | optional | 400px | The height of the brightness slider |
| `switchWidth` | string | optional | 150px | The width of the switch |
| `switchHeight` | string | optional | 400px | The height of the switch |
| `borderRadius` | string | optional | 12px | The border radius of the slider and switch |
| `sliderColor` | string | optional | "#FFF" | The color of the slider |
| `sliderColoredByLight` | boolean | optional | false | Let the color of the slider change based on the light color, this overwrites the sliderColor setting |
| `sliderThumbColor` | string | optional | "#ddd" | The color of the line that you use to slide the slider  |
| `sliderTrackColor` | string | optional | "#ddd" | The color of the slider track |
| `switchColor` | string | optional | "#FFF" | The color of the switch  |
| `switchTrackColor` | string | optional | "#ddd" | The color of the switch track |
| `settings` | boolean | optional | false | When it will add an settings button that displays the more-info content |
| `settingsPosition` | string | optional | `bottom`  | set position of the settings button options: `top` or `bottom`. |
| `displayType` | string | optional | `auto`  | set the type of the card to force display slider of switch options: `slider` or `switch`. |
| `brightnessTransitionEnabled` | boolean | optional | `false`  | set to true to enable brightness transition. |
| `brightnessTransitionTime` | string | optional | `0.5`  | set the duration the transition for the brightness should take default is 0.5 sec. |

