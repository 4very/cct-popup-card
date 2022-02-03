import { LitElement, html, css } from 'lit-element'
import tinycolor, { TinyColor, isReadable } from '@ctrl/tinycolor'
import { closePopUp } from 'card-tools/src/popup'
import { fireEvent } from 'card-tools/src/event'
import { provideHass } from 'card-tools/src/hass'
import { createCard } from 'card-tools/src/lovelace-element.js'
import { computeStateDisplay } from 'custom-card-helpers'

class LightPopupCard extends LitElement {
  config: any = {
    type: 'custom:cct-popup-card',
    entity: 'light.living_room_bulb_1',
    icon: 'none',
    fullscreen: false,
    brightnessWidth: '130px',
    brightnessHeight: '360px',
    borderRadius: '1.7em',
    displayType: 'slider',
    sliderColor: '#c7c7c7',
    sliderTrackColor: 'rgba(25, 25, 25, 0.9)',
  }
  hass: any = {
    auth: {
      data: {
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2Y2FiNDRjYTBmMTI0MzdjYTExMGY4ZDA2NTQ3ZDk0MCIsImlhdCI6MTY0MzkwMzU2MSwiZXhwIjoxNjQzOTA1MzYxfQ.A9Nc_cEqrkyC4qm0Y89MCId6XaNp5sienoWMFqRI2Qw',
        token_type: 'Bearer',
        refresh_token:
          '8a3b0fbfcf497d1832a09e907cf1655954235e2cf8ba44ca27077f8d374436aec345631ea2579549e406efd56f8d09214f6c83e846f8f9e6501262ccad9eec13',
        expires_in: 1800,
        hassUrl: 'http://192.168.0.191:8123',
        clientId: 'http://192.168.0.191:8123/',
        expires: 1643905360648,
      },
    },
    connection: {
      options: {
        setupRetry: 0,
        auth: {
          data: {
            access_token:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2Y2FiNDRjYTBmMTI0MzdjYTExMGY4ZDA2NTQ3ZDk0MCIsImlhdCI6MTY0MzkwMzU2MSwiZXhwIjoxNjQzOTA1MzYxfQ.A9Nc_cEqrkyC4qm0Y89MCId6XaNp5sienoWMFqRI2Qw',
            token_type: 'Bearer',
            refresh_token:
              '8a3b0fbfcf497d1832a09e907cf1655954235e2cf8ba44ca27077f8d374436aec345631ea2579549e406efd56f8d09214f6c83e846f8f9e6501262ccad9eec13',
            expires_in: 1800,
            hassUrl: 'http://192.168.0.191:8123',
            clientId: 'http://192.168.0.191:8123/',
            expires: 1643905360648,
          },
        },
      },
      commandId: 189,
      commands: {},
      eventListeners: {},
      closeRequested: false,
      socket: {},
      haVersion: '2021.12.10',
      _ent: {},
      _cnf: {},
      _srv: {},
      _pnl: {},
      _thm: {},
      _usr: {},
      '_frontendUserData-core': {},
      '_frontendUserData-core-optimistic': {},
      _ntf: {},
      suspendReconnectPromise: {},
      _energy_dashboard: {
        _active: 0,
        start: '2022-02-03T05:00:00.000Z',
        end: '2022-02-04T04:59:59.999Z',
        _updatePeriodTimeout: 271,
      },
    },
    connected: true,
    states: {
      'person.admin': {
        entity_id: 'person.admin',
        state: 'home',
        attributes: {
          editable: false,
          id: 'admin',
          latitude: 42.724904350586556,
          longitude: -73.69197464357481,
          gps_accuracy: 9,
          source: 'device_tracker.iphone',
          user_id: '05851259f2cb49e78aa16131021fb95a',
          friendly_name: 'admin',
        },
        last_changed: '2022-02-03T15:49:46.050591+00:00',
        last_updated: '2022-02-03T15:49:58.944837+00:00',
        context: {
          id: '88c386595182516eb49be0ad2f39b769',
          parent_id: null,
          user_id: null,
        },
      },
      'sun.sun': {
        entity_id: 'sun.sun',
        state: 'above_horizon',
        attributes: {
          next_dawn: '2022-02-04T11:35:11.241214+00:00',
          next_dusk: '2022-02-03T22:41:30.810164+00:00',
          next_midnight: '2022-02-04T05:08:42+00:00',
          next_noon: '2022-02-03T17:08:32+00:00',
          next_rising: '2022-02-04T12:05:21.318966+00:00',
          next_setting: '2022-02-03T22:11:14.608343+00:00',
          elevation: 29.38,
          azimuth: 163.78,
          rising: true,
          friendly_name: 'Sun',
        },
        last_changed: '2022-02-03T15:49:48.549124+00:00',
        last_updated: '2022-02-03T16:09:48.589912+00:00',
        context: {
          id: 'e164d579be5563c0bfed3c9175dae775',
          parent_id: null,
          user_id: null,
        },
      },
      'govee.state': {
        entity_id: 'govee.state',
        state: 'async_setup called',
        attributes: {},
        last_changed: '2022-02-03T15:49:49.513831+00:00',
        last_updated: '2022-02-03T15:49:49.513831+00:00',
        context: {
          id: '9b6e5961e8606f70ac5d0803c39a5233',
          parent_id: null,
          user_id: null,
        },
      },
      'zone.home': {
        entity_id: 'zone.home',
        state: 'zoning',
        attributes: {
          latitude: 42.7247058,
          longitude: -73.692001,
          radius: 100,
          passive: false,
          editable: true,
          icon: 'mdi:home',
          friendly_name: 'Ambrosian Memory',
        },
        last_changed: '2022-02-03T15:49:49.515183+00:00',
        last_updated: '2022-02-03T15:49:49.515183+00:00',
        context: {
          id: '0080f4d36943ef814d023a81485e00a0',
          parent_id: null,
          user_id: null,
        },
      },
      'binary_sensor.spotify_using_snapcast': {
        entity_id: 'binary_sensor.spotify_using_snapcast',
        state: 'on',
        attributes: {
          friendly_name: 'Spotify using Snapcast',
        },
        last_changed: '2022-02-03T15:49:58.947064+00:00',
        last_updated: '2022-02-03T15:49:58.947064+00:00',
        context: {
          id: 'cceae39e1647278c011173f17a3eba0c',
          parent_id: null,
          user_id: null,
        },
      },
      'binary_sensor.updater': {
        entity_id: 'binary_sensor.updater',
        state: 'on',
        attributes: {
          release_notes:
            'https://www.home-assistant.io/blog/2022/02/02/release-20222/',
          newest_version: '2022.2.0',
          device_class: 'update',
          friendly_name: 'Updater',
        },
        last_changed: '2022-02-03T15:49:50.337636+00:00',
        last_updated: '2022-02-03T15:49:50.337636+00:00',
        context: {
          id: 'e1a967a238c14f38bd8e36e53cd450f1',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.snapcast_group_f6eee721_0d2d_1e56_46b2_da6bbe22241d': {
        entity_id:
          'media_player.snapcast_group_f6eee721_0d2d_1e56_46b2_da6bbe22241d',
        state: 'playing',
        attributes: {
          source_list: ['Spotify'],
          volume_level: 1,
          is_volume_muted: false,
          source: 'Spotify',
          friendly_name: 'snapcast_group_f6eee721-0d2d-1e56-46b2-da6bbe22241d',
          supported_features: 2060,
        },
        last_changed: '2022-02-03T15:49:49.585613+00:00',
        last_updated: '2022-02-03T15:49:49.585613+00:00',
        context: {
          id: '0335b2b4ff94f9926cfce400904d8aae',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.snapcast_group_8cbcbe57_b1ff_f048_ab12_70722cf97dde': {
        entity_id:
          'media_player.snapcast_group_8cbcbe57_b1ff_f048_ab12_70722cf97dde',
        state: 'playing',
        attributes: {
          source_list: ['Spotify'],
          volume_level: 1,
          is_volume_muted: false,
          source: 'Spotify',
          friendly_name: 'snapcast_group_8cbcbe57-b1ff-f048-ab12-70722cf97dde',
          supported_features: 2060,
        },
        last_changed: '2022-02-03T15:49:49.585804+00:00',
        last_updated: '2022-02-03T15:49:49.585804+00:00',
        context: {
          id: '8fc9ee1cd96865882d03ac09cb6c6f6d',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.snapcast_group_14a64816_323a_8a17_c6b7_23fe6a053e17': {
        entity_id:
          'media_player.snapcast_group_14a64816_323a_8a17_c6b7_23fe6a053e17',
        state: 'playing',
        attributes: {
          source_list: ['Spotify'],
          volume_level: 1,
          is_volume_muted: false,
          source: 'Spotify',
          friendly_name: 'snapcast_group_14a64816-323a-8a17-c6b7-23fe6a053e17',
          supported_features: 2060,
        },
        last_changed: '2022-02-03T15:49:49.585974+00:00',
        last_updated: '2022-02-03T15:49:49.585974+00:00',
        context: {
          id: '2fa4eb153449860de0cdc8f02349b09f',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.snapcast_tv': {
        entity_id: 'media_player.snapcast_tv',
        state: 'on',
        attributes: {
          source_list: ['Spotify'],
          volume_level: 1,
          is_volume_muted: true,
          source: 'Spotify',
          latency: 0,
          friendly_name: 'Snapcast TV',
          icon: 'mdi:television',
          supported_features: 2060,
        },
        last_changed: '2022-02-03T15:49:49.586166+00:00',
        last_updated: '2022-02-03T15:49:49.586166+00:00',
        context: {
          id: '053f48e0a417cfa9eac71bfb103b9a48',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.snapcast_brookecomp': {
        entity_id: 'media_player.snapcast_brookecomp',
        state: 'on',
        attributes: {
          source_list: ['Spotify'],
          volume_level: 1,
          is_volume_muted: true,
          source: 'Spotify',
          latency: 0,
          friendly_name: 'Snapcast Brookelyn Comp',
          icon: 'mdi:monitor-speaker',
          supported_features: 2060,
        },
        last_changed: '2022-02-03T15:49:49.586315+00:00',
        last_updated: '2022-02-03T15:49:49.586315+00:00',
        context: {
          id: 'ab916994039d54ee188b8ec349a89dd1',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.snapcast_averycomp': {
        entity_id: 'media_player.snapcast_averycomp',
        state: 'on',
        attributes: {
          source_list: ['Spotify'],
          volume_level: 1,
          is_volume_muted: false,
          source: 'Spotify',
          latency: 0,
          friendly_name: 'Snapcast Avery Comp',
          icon: 'mdi:monitor-speaker',
          supported_features: 2060,
        },
        last_changed: '2022-02-03T15:49:49.586454+00:00',
        last_updated: '2022-02-03T15:49:49.586454+00:00',
        context: {
          id: '73e0ae22a6d72354c10bda6d9b77d3f0',
          parent_id: null,
          user_id: null,
        },
      },
      'binary_sensor.plex_availability': {
        entity_id: 'binary_sensor.plex_availability',
        state: 'on',
        attributes: {
          device_class: 'connectivity',
          friendly_name: 'plex_availability',
        },
        last_changed: '2022-02-03T15:49:49.595757+00:00',
        last_updated: '2022-02-03T15:49:49.595757+00:00',
        context: {
          id: 'ea7d3ade356978590e8063e4cf38d411',
          parent_id: null,
          user_id: null,
        },
      },
      'binary_sensor.nas_internet_access': {
        entity_id: 'binary_sensor.nas_internet_access',
        state: 'on',
        attributes: {
          round_trip_time_avg: 27.804,
          round_trip_time_max: 33.454,
          round_trip_time_mdev: '',
          round_trip_time_min: 22.715,
          device_class: 'connectivity',
          friendly_name: 'nas_internet_access',
        },
        last_changed: '2022-02-03T15:49:49.636104+00:00',
        last_updated: '2022-02-03T16:09:54.416075+00:00',
        context: {
          id: '95f77bb1c2f8081c450bf3ebe66ddb38',
          parent_id: null,
          user_id: null,
        },
      },
      'script.1642401425928': {
        entity_id: 'script.1642401425928',
        state: 'off',
        attributes: {
          last_triggered: '2022-01-17T06:37:22.008954+00:00',
          mode: 'single',
          current: 0,
          friendly_name: 'New Script',
        },
        last_changed: '2022-02-03T15:49:50.356928+00:00',
        last_updated: '2022-02-03T15:49:50.356928+00:00',
        context: {
          id: 'abbde1002a29cddaf318427e03d90970',
          parent_id: null,
          user_id: null,
        },
      },
      'script.toggle_mute': {
        entity_id: 'script.toggle_mute',
        state: 'off',
        attributes: {
          last_triggered: '2022-02-03T15:17:27.017856+00:00',
          mode: 'single',
          current: 0,
          friendly_name: 'Toggle media_player mute',
        },
        last_changed: '2022-02-03T15:49:50.357154+00:00',
        last_updated: '2022-02-03T15:49:50.357154+00:00',
        context: {
          id: 'fdd81e066adfbb6b78b345653f4d23b0',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.iphone_distance': {
        entity_id: 'sensor.iphone_distance',
        state: '457',
        attributes: {
          unit_of_measurement: 'm',
          icon: 'mdi:hiking',
          friendly_name: 'iPhone Distance',
        },
        last_changed: '2022-02-03T15:49:50.593776+00:00',
        last_updated: '2022-02-03T15:49:50.593776+00:00',
        context: {
          id: '928112eab7366201fa4bd91642142bbf',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.iphone_steps': {
        entity_id: 'sensor.iphone_steps',
        state: '655',
        attributes: {
          unit_of_measurement: 'steps',
          icon: 'mdi:walk',
          friendly_name: 'iPhone Steps',
        },
        last_changed: '2022-02-03T15:49:50.593903+00:00',
        last_updated: '2022-02-03T15:49:50.593903+00:00',
        context: {
          id: '60fd4847b800c7115f28caf283396ff6',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.iphone_activity': {
        entity_id: 'sensor.iphone_activity',
        state: 'Unknown',
        attributes: {
          Confidence: 'High',
          Types: ['Unknown'],
          icon: 'mdi:help-circle',
          friendly_name: 'iPhone Activity',
        },
        last_changed: '2022-02-03T15:49:50.594010+00:00',
        last_updated: '2022-02-03T15:49:50.594010+00:00',
        context: {
          id: 'e936c16218c9f6d780254d7caa20d16b',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.iphone_battery_level': {
        entity_id: 'sensor.iphone_battery_level',
        state: '62',
        attributes: {
          unit_of_measurement: '%',
          device_class: 'battery',
          icon: 'mdi:battery-60',
          friendly_name: 'iPhone Battery Level',
        },
        last_changed: '2022-02-03T15:49:50.594083+00:00',
        last_updated: '2022-02-03T15:49:50.594083+00:00',
        context: {
          id: 'd0195d06b4f2699b7689ddce88c82e74',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.iphone_geocoded_location': {
        entity_id: 'sensor.iphone_geocoded_location',
        state: '254 Washington St\nTroy NY 12180\nUnited States',
        attributes: {
          'Administrative Area': 'NY',
          'Areas Of Interest': 'N/A',
          Country: 'United States',
          'Inland Water': 'N/A',
          'ISO Country Code': 'US',
          Locality: 'Troy',
          Location: [42.724904350586556, -73.69197464357481],
          Name: '254 Washington St',
          Ocean: 'N/A',
          'Postal Code': '12180',
          'Sub Administrative Area': 'Rensselaer County',
          'Sub Locality': 'Historic Downtown Troy',
          'Sub Thoroughfare': '254',
          Thoroughfare: 'Washington St',
          'Time Zone': 'America/New_York',
          Zones: ['Ambrosian Memory'],
          icon: 'mdi:map',
          friendly_name: 'iPhone Geocoded Location',
        },
        last_changed: '2022-02-03T15:49:50.594162+00:00',
        last_updated: '2022-02-03T15:49:50.594162+00:00',
        context: {
          id: 'c52bbcaf821fd49ebe929295b4bc3918',
          parent_id: null,
          user_id: null,
        },
      },
      'device_tracker.iphone': {
        entity_id: 'device_tracker.iphone',
        state: 'home',
        attributes: {
          source_type: 'gps',
          battery_level: 43,
          latitude: 42.724904350586556,
          longitude: -73.69197464357481,
          gps_accuracy: 9,
          altitude: 11.361815452575684,
          vertical_accuracy: 75,
          friendly_name: 'avery iphone ',
        },
        last_changed: '2022-02-03T15:49:50.606491+00:00',
        last_updated: '2022-02-03T15:49:50.606491+00:00',
        context: {
          id: '014804face3f601439154a7e1b453168',
          parent_id: null,
          user_id: null,
        },
      },
      'weather.home': {
        entity_id: 'weather.home',
        state: 'rainy',
        attributes: {
          temperature: 38.1,
          humidity: 99,
          pressure: 30.26,
          wind_bearing: 169.7,
          wind_speed: 4,
          forecast: [
            {
              condition: 'snowy',
              precipitation: 0.58,
              temperature: 26.2,
              templow: 14.2,
              datetime: '2022-02-04T17:00:00+00:00',
              wind_bearing: 3.5,
              wind_speed: 17.3,
            },
            {
              condition: 'sunny',
              precipitation: 0,
              temperature: 17.2,
              templow: -3.6,
              datetime: '2022-02-05T17:00:00+00:00',
              wind_bearing: 306.4,
              wind_speed: 19.4,
            },
            {
              condition: 'sunny',
              precipitation: 0,
              temperature: 19.9,
              templow: -6.2,
              datetime: '2022-02-06T17:00:00+00:00',
              wind_bearing: 173.6,
              wind_speed: 11.5,
            },
            {
              condition: 'partlycloudy',
              precipitation: 0,
              temperature: 34,
              templow: 13.3,
              datetime: '2022-02-07T17:00:00+00:00',
              wind_bearing: 174.4,
              wind_speed: 13.7,
            },
            {
              condition: 'partlycloudy',
              precipitation: 0,
              temperature: 40.5,
              templow: 25.3,
              datetime: '2022-02-08T17:00:00+00:00',
              wind_bearing: 240.3,
              wind_speed: 10.1,
            },
          ],
          attribution:
            'Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.',
          friendly_name: 'Weather Home',
        },
        last_changed: '2022-02-03T15:49:50.611729+00:00',
        last_updated: '2022-02-03T15:49:50.611729+00:00',
        context: {
          id: '3609ec73bbd6c4a5fcf3aa82d65a6a19',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.plex_recently_added': {
        entity_id: 'sensor.plex_recently_added',
        state: 'Online',
        attributes: {
          data: [
            {
              title_default: '$title',
              line1_default: '$episode',
              line2_default: '$release',
              line3_default: '$number - $rating - $runtime',
              line4_default: '$genres',
              icon: 'mdi:eye-off',
            },
            {
              airdate: '2022-01-31T05:20:26Z',
              aired: '2022-01-30',
              release: '$day, $date $time',
              flag: false,
              title: 'Euphoria (US)',
              episode: 'You Who Cannot See, Think of Those Who Can',
              number: 'S02E04',
              runtime: 61,
              rating: '',
              poster: '/local/Plex_Recently_Added/p1018.jpg',
              fanart: '/local/Plex_Recently_Added/f1018.jpg',
            },
          ],
          friendly_name: 'Plex Recently Added',
        },
        last_changed: '2022-02-03T15:49:50.639040+00:00',
        last_updated: '2022-02-03T15:49:50.639040+00:00',
        context: {
          id: '28ce38d7eddcd1da323119bc0de918a0',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.plex_ambrosian_memory': {
        entity_id: 'sensor.plex_ambrosian_memory',
        state: '0',
        attributes: {
          unit_of_measurement: 'Watching',
          icon: 'mdi:plex',
          friendly_name: 'Plex (Ambrosian Memory)',
        },
        last_changed: '2022-02-03T15:49:54.942816+00:00',
        last_updated: '2022-02-03T15:49:54.942816+00:00',
        context: {
          id: '00fdede07f289371208b03e7404c5f43',
          parent_id: null,
          user_id: null,
        },
      },
      'light.avery_lights': {
        entity_id: 'light.avery_lights',
        state: 'off',
        attributes: {
          min_mireds: 111,
          max_mireds: 500,
          supported_color_modes: ['color_temp', 'hs'],
          rate_limit_total: 100,
          rate_limit_remaining: 39,
          rate_limit_reset_seconds: -0.05970501899719238,
          rate_limit_reset: 1643904719,
          rate_limit_on: 5,
          manufacturer: 'Govee',
          model: 'H6163',
          friendly_name: 'Avery Lights',
          supported_features: 19,
        },
        last_changed: '2022-02-03T15:49:50.763358+00:00',
        last_updated: '2022-02-03T16:11:59.059817+00:00',
        context: {
          id: 'a3da945e83eeaebd32bd826368d82ae1',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.hacs': {
        entity_id: 'sensor.hacs',
        state: '0',
        attributes: {
          repositories: [],
          unit_of_measurement: 'pending update(s)',
          icon: 'hacs:hacs',
          friendly_name: 'hacs',
        },
        last_changed: '2022-02-03T15:50:03.714797+00:00',
        last_updated: '2022-02-03T15:50:03.714797+00:00',
        context: {
          id: 'ff35a3d0365114fbb0681d47a7aa7a5d',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.spotify_sommea112': {
        entity_id: 'media_player.spotify_sommea112',
        state: 'playing',
        attributes: {
          source_list: ['Snapcast', 'iPhone', 'EGERIA'],
          volume_level: 0.45,
          media_content_id: 'spotify:track:476F7Wdh2LQLBbf3guDfIQ',
          media_content_type: 'music',
          media_duration: 152,
          media_position: 103.844,
          media_position_updated_at: '2022-02-03T16:10:08.549000+00:00',
          media_title: 'Wrong with u',
          media_artist: 'ego apartment',
          media_album_name: 'Wrong with u',
          media_track: 1,
          media_playlist: 'Indie Pop',
          source: 'Snapcast',
          shuffle: true,
          repeat: 'all',
          entity_picture:
            '/api/media_player_proxy/media_player.spotify_sommea112?token=8c766e89e7ca0ebcfbae4b3b223b6cbba7f4ef6ea923de2054fbcaa43d854260&cache=476b7d54ba2424a3',
          icon: 'mdi:spotify',
          friendly_name: 'Avery Spotify',
          supported_features: 444983,
        },
        last_changed: '2022-02-03T15:49:51.913489+00:00',
        last_updated: '2022-02-03T16:11:52.828998+00:00',
        context: {
          id: '1e60d737f74764282f244601b3a6f966',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.browser_1b0a8db8_1f51c326': {
        entity_id: 'media_player.browser_1b0a8db8_1f51c326',
        state: 'unavailable',
        attributes: {
          volume_level: 1,
          is_volume_muted: false,
          media_content_id: '',
          type: 'browser_mod',
          deviceID: '1b0a8db8-1f51c326',
          supported_features: 21005,
        },
        last_changed: '2022-02-03T15:51:46.500180+00:00',
        last_updated: '2022-02-03T15:51:46.500180+00:00',
        context: {
          id: '2f2896561566b8c699d88603e1fc258f',
          parent_id: null,
          user_id: null,
        },
      },
      'light.browser_1b0a8db8_1f51c326': {
        entity_id: 'light.browser_1b0a8db8_1f51c326',
        state: 'unavailable',
        attributes: {
          supported_color_modes: ['onoff'],
          color_mode: 'onoff',
          type: 'browser_mod',
          deviceID: '1b0a8db8-1f51c326',
          last_seen: '2022-02-03T10:51:18.947819',
          supported_features: 0,
        },
        last_changed: '2022-02-03T15:51:56.427155+00:00',
        last_updated: '2022-02-03T15:51:56.427155+00:00',
        context: {
          id: 'c2daa5492189d529ab25b85598057cb8',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.browser_1b0a8db8_1f51c326': {
        entity_id: 'sensor.browser_1b0a8db8_1f51c326',
        state: 'unavailable',
        attributes: {
          type: 'browser_mod',
          last_seen: '2022-02-03T11:11:51.778701',
          deviceID: '1b0a8db8-1f51c326',
          path: '/config/server_control',
          visibility: 'visible',
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0',
          currentUser: 'admin',
          fullyKiosk: false,
          width: 958,
          height: 961,
          darkMode: false,
          userData: {
            id: '05851259f2cb49e78aa16131021fb95a',
            name: 'admin',
            is_owner: true,
            is_admin: true,
            credentials: [
              {
                auth_provider_type: 'homeassistant',
                auth_provider_id: null,
              },
            ],
            mfa_modules: [
              {
                id: 'totp',
                name: 'Authenticator app',
                enabled: false,
              },
            ],
          },
          config: {
            command: 'update',
          },
        },
        last_changed: '2022-02-03T15:51:50.854355+00:00',
        last_updated: '2022-02-03T16:11:51.779413+00:00',
        context: {
          id: 'ca95015ff17c1391e76793376093a0b8',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.browser_b66c3731_3016cd4e': {
        entity_id: 'media_player.browser_b66c3731_3016cd4e',
        state: 'unavailable',
        attributes: {
          restored: true,
          supported_features: 21005,
        },
        last_changed: '2022-02-03T15:49:58.942469+00:00',
        last_updated: '2022-02-03T15:49:58.942469+00:00',
        context: {
          id: '1ef1f6415390f7ef07ff74d0878ce082',
          parent_id: null,
          user_id: null,
        },
      },
      'light.browser_b66c3731_3016cd4e': {
        entity_id: 'light.browser_b66c3731_3016cd4e',
        state: 'unavailable',
        attributes: {
          restored: true,
          supported_color_modes: ['onoff'],
          supported_features: 0,
        },
        last_changed: '2022-02-03T15:49:58.942530+00:00',
        last_updated: '2022-02-03T15:49:58.942530+00:00',
        context: {
          id: 'e5c65d07937a56bc97075992885075bd',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.browser_b66c3731_3016cd4e': {
        entity_id: 'sensor.browser_b66c3731_3016cd4e',
        state: 'unavailable',
        attributes: {
          restored: true,
          supported_features: 0,
        },
        last_changed: '2022-02-03T15:49:58.942556+00:00',
        last_updated: '2022-02-03T15:49:58.942556+00:00',
        context: {
          id: 'addac6f448d8a9e9782d813605ad9984',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.plex_plex_for_android_tv_smart_tv': {
        entity_id: 'media_player.plex_plex_for_android_tv_smart_tv',
        state: 'unavailable',
        attributes: {
          restored: true,
          friendly_name: 'Plex (Plex for Android (TV) - Smart TV)',
          supported_features: 152127,
        },
        last_changed: '2022-02-03T15:49:58.942581+00:00',
        last_updated: '2022-02-03T15:49:58.942581+00:00',
        context: {
          id: '72834ec18b7437c34f6586e7b382dcbf',
          parent_id: null,
          user_id: null,
        },
      },
      'light.living_room_bulb_1': {
        entity_id: 'light.living_room_bulb_1',
        state: 'off',
        attributes: {
          min_mireds: 153,
          max_mireds: 370,
          supported_color_modes: ['color_temp'],
          off_brightness: null,
          friendly_name: 'Living Room Bulb 1',
          supported_features: 43,
        },
        last_changed: '2022-02-03T15:50:01.057579+00:00',
        last_updated: '2022-02-03T15:50:01.057579+00:00',
        context: {
          id: '760608b482d9a17e8ca6105aa9f18324',
          parent_id: null,
          user_id: null,
        },
      },
      'light.living_room_bulb_2': {
        entity_id: 'light.living_room_bulb_2',
        state: 'off',
        attributes: {
          min_mireds: 153,
          max_mireds: 370,
          supported_color_modes: ['color_temp'],
          off_brightness: null,
          friendly_name: 'Living Room Bulb 2',
          supported_features: 43,
        },
        last_changed: '2022-02-03T15:50:01.058203+00:00',
        last_updated: '2022-02-03T15:50:01.058203+00:00',
        context: {
          id: '706a539c60ded5b5fc94172f67a03d4c',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.browser_fa921c14_a3540fc1': {
        entity_id: 'media_player.browser_fa921c14_a3540fc1',
        state: 'unavailable',
        attributes: {
          restored: true,
          supported_features: 21005,
        },
        last_changed: '2022-02-03T15:49:58.942650+00:00',
        last_updated: '2022-02-03T15:49:58.942650+00:00',
        context: {
          id: '0ee0ef89a382192f48dbbad836eccb09',
          parent_id: null,
          user_id: null,
        },
      },
      'light.browser_fa921c14_a3540fc1': {
        entity_id: 'light.browser_fa921c14_a3540fc1',
        state: 'unavailable',
        attributes: {
          restored: true,
          supported_color_modes: ['onoff'],
          supported_features: 0,
        },
        last_changed: '2022-02-03T15:49:58.942670+00:00',
        last_updated: '2022-02-03T15:49:58.942670+00:00',
        context: {
          id: 'f705c67c904b245d51e63902ac187ab6',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.browser_fa921c14_a3540fc1': {
        entity_id: 'sensor.browser_fa921c14_a3540fc1',
        state: 'unavailable',
        attributes: {
          restored: true,
          supported_features: 0,
        },
        last_changed: '2022-02-03T15:49:58.942690+00:00',
        last_updated: '2022-02-03T15:49:58.942690+00:00',
        context: {
          id: '5fa0580defaf040b7f7bd6012ba5da96',
          parent_id: null,
          user_id: null,
        },
      },
      'persistent_notification.config_entry_discovery': {
        entity_id: 'persistent_notification.config_entry_discovery',
        state: 'notifying',
        attributes: {
          title: 'New devices discovered',
          friendly_name: 'New devices discovered',
          message:
            'We have discovered new devices on your network. [Check it out](/config/integrations).',
        },
        last_changed: '2022-02-03T15:50:00.460490+00:00',
        last_updated: '2022-02-03T15:50:00.460490+00:00',
        context: {
          id: '6ec90eda136b4d1e7871dda48bea0206',
          parent_id: null,
          user_id: null,
        },
      },
      'media_player.browser_fa3064a2_21899289': {
        entity_id: 'media_player.browser_fa3064a2_21899289',
        state: 'idle',
        attributes: {
          volume_level: 1,
          is_volume_muted: false,
          media_content_id: '',
          type: 'browser_mod',
          deviceID: 'fa3064a2-21899289',
          supported_features: 21005,
        },
        last_changed: '2022-02-03T15:52:42.662471+00:00',
        last_updated: '2022-02-03T15:52:42.662471+00:00',
        context: {
          id: 'a18318f48530a8486610294b2da05fc7',
          parent_id: null,
          user_id: null,
        },
      },
      'light.browser_fa3064a2_21899289': {
        entity_id: 'light.browser_fa3064a2_21899289',
        state: 'on',
        attributes: {
          supported_color_modes: ['onoff'],
          color_mode: 'onoff',
          type: 'browser_mod',
          deviceID: 'fa3064a2-21899289',
          last_seen: '2022-02-03T10:52:42.662994',
          supported_features: 0,
        },
        last_changed: '2022-02-03T15:51:48.938443+00:00',
        last_updated: '2022-02-03T15:52:42.667746+00:00',
        context: {
          id: '60343d252cd6b04d836c0a4ae47c4190',
          parent_id: null,
          user_id: null,
        },
      },
      'sensor.browser_fa3064a2_21899289': {
        entity_id: 'sensor.browser_fa3064a2_21899289',
        state: '1',
        attributes: {
          type: 'browser_mod',
          last_seen: '2022-02-03T11:11:56.114450',
          deviceID: 'fa3064a2-21899289',
          path: '/lovelace/0',
          visibility: 'hidden',
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0',
          currentUser: 'admin',
          fullyKiosk: false,
          width: 958,
          height: 966,
          darkMode: false,
          userData: {
            id: '05851259f2cb49e78aa16131021fb95a',
            name: 'admin',
            is_owner: true,
            is_admin: true,
            credentials: [
              {
                auth_provider_type: 'homeassistant',
                auth_provider_id: null,
              },
            ],
            mfa_modules: [
              {
                id: 'totp',
                name: 'Authenticator app',
                enabled: false,
              },
            ],
          },
          config: {
            command: 'update',
          },
        },
        last_changed: '2022-02-03T15:51:48.939753+00:00',
        last_updated: '2022-02-03T16:11:56.114867+00:00',
        context: {
          id: 'fc0ba78ac4a74e1ea65b31b15ce708bc',
          parent_id: null,
          user_id: null,
        },
      },
    },
    config: {
      latitude: 42.7247058,
      longitude: -73.692001,
      elevation: 11,
      unit_system: {
        length: 'mi',
        accumulated_precipitation: 'in',
        mass: 'lb',
        pressure: 'psi',
        temperature: '°F',
        volume: 'gal',
        wind_speed: 'mph',
      },
      location_name: 'Ambrosian Memory',
      time_zone: 'America/New_York',
      components: [
        'notify',
        'media_player',
        'media_player.plex',
        'binary_sensor.zha',
        'device_tracker.zha',
        'default_config',
        'weather',
        'fan',
        'webhook',
        'websocket_api',
        'sensor',
        'met',
        'plex',
        'lock.zha',
        'binary_sensor',
        'sensor.hacs',
        'api',
        'binary_sensor.ping',
        'zone',
        'template',
        'camera.browser_mod',
        'number',
        'camera',
        'alarm_control_panel.zha',
        'history',
        'analytics',
        'onboarding',
        'tts.google_translate',
        'sensor.plex',
        'lock',
        'light.zha',
        'light',
        'homeassistant',
        'switch',
        'cloud',
        'sun',
        'binary_sensor.command_line',
        'zeroconf',
        'hassio',
        'ping',
        'media_source',
        'blueprint',
        'persistent_notification',
        'homekit',
        'energy',
        'sensor.zha',
        'timer',
        'system_health',
        'sensor.energy',
        'sensor.hassio',
        'person',
        'light.browser_mod',
        'binary_sensor.template',
        'tts',
        'notify.mobile_app',
        'binary_sensor.hassio',
        'sensor.plex_recently_added',
        'zha',
        'trace',
        'http',
        'image',
        'config',
        'media_player.spotify',
        'lovelace',
        'network',
        'scene',
        'ssdp',
        'recorder',
        'notify.pushover',
        'usb',
        'govee',
        'media_player.browser_mod',
        'logbook',
        'mobile_app',
        'siren.zha',
        'device_automation',
        'binary_sensor.mobile_app',
        'browser_mod',
        'sensor.browser_mod',
        'device_tracker.mobile_app',
        'sensor.mobile_app',
        'hacs',
        'switch.zha',
        'climate',
        'binary_sensor.updater',
        'weather.met',
        'cover.zha',
        'climate.zha',
        'scene.homeassistant',
        'input_number',
        'map',
        'spotify',
        'input_select',
        'input_boolean',
        'search',
        'media_player.snapcast',
        'script',
        'counter',
        'siren',
        'dhcp',
        'number.zha',
        'device_tracker',
        'tag',
        'fan.zha',
        'automation',
        'updater',
        'binary_sensor.browser_mod',
        'system_log',
        'light.govee',
        'input_text',
        'alarm_control_panel',
        'notify.twitter',
        'frontend',
        'my',
        'cover',
        'input_datetime',
        'ffmpeg',
        'group',
        'stream',
        'auth',
      ],
      config_dir: '/config',
      whitelist_external_dirs: ['/config/www', '/media'],
      allowlist_external_dirs: ['/config/www', '/media'],
      allowlist_external_urls: [],
      version: '2021.12.10',
      config_source: 'yaml',
      safe_mode: false,
      state: 'RUNNING',
      external_url: null,
      internal_url: null,
      currency: 'USD',
    },
    themes: {
      themes: {
        tablet: {
          'primary-text-color': '#e1e1e1',
          'primary-background-color': '#111111',
          'secondary-background-color': '#202020',
          'card-background-color': '#1c1c1c',
          'primary-color': '#03a9f4',
          'app-header-text-color': 'var(--primary-text-color)',
          'app-header-background-color': '#101e24',
          'table-row-background-color': 'var(--primary-background-color)',
          'table-row-alternative-background-color':
            'var(--secondary-background-color)',
          'sidebar-background-color': 'var(--card-background-color)',
          'divider-color': 'rgba(225, 225, 225, 0.12)',
          'ha-card-box-shadow': 'none',
          'ha-card-background': 'none',
          'grid-card-gap': '5%',
          'masonry-view-card-margin': '0px',
          'state-icon-color': '#9da0a2',
          'state-icon-active-color': '#3182b7',
          'switch-checked-color': '#7a7d7f',
          'switch-unchecked-button-color': '#3b4041',
          'switch-unchecked-track-color': '#0c0d0d',
          'paper-slider-knob-color': '#a4abb1',
          'paper-slider-knob-start-color': '#a4abb1',
          'paper-slider-pin-color': '#626a6f',
          'paper-slider-active-color': '#626a6f',
          'paper-slider-container-color': '#202020',
          'mdc-dialog-scrim-color': 'rgba(0, 0, 0, 0.5)',
          'paper-toast-color': 'var(--primary-text-color)',
          'paper-toast-background-color': '#1b1b1bf2',
          'vertical-stack-card-margin': '0',
          'ha-card-background-color': 'rgba(34,38,39,0.9)',
          'ha-card-header-background-color': 'rgba(48,52,52,0.8)',
          'custom-layout-card-padding': '3.3vw',
          'custom-button-card-border-radius': '8%',
          'sidebar-time-font-size': '5vw',
          'sidebar-time-line-height': '4vw',
          'sidebar-font-size': '1.5vw',
          'sidebar-line-height': '2.1vw',
          'media-blur-height': '24.5%',
          'card-content-padding': '1.8em 2.2em 1.8em 2em',
          'card-mod-theme': 'tablet',
          'card-mod-root':
            "ha-app-layout {\n  background: url('/local/background.png');\n  background-size: cover;\n}\n",
          'card-mod-view-yaml':
            '.: |\n  hui-view {\n    background: none !important;\n    min-height: 100vh;\n  }\n\n#################################################\n#                                               #\n#              GRID CARD HEADINGS               #\n#                                               #\n#################################################\n\ngrid-layout$:\n  hui-grid-card:\n    $: |\n      /* default */\n      h1 {\n        font-size: 2.4vw !important;\n        line-height: 0 !important;\n        font-family: SF Text, Roboto !important;\n        font-weight: 500 !important;\n        color: rgba(255, 255, 255, 0.8) !important;\n        padding: 1vw 0 2vw 0 !important;\n      }\n      /* portrait */\n      @media screen and (max-width: 1200px) {\n        h1 {\n          font-size: 3.3vw !important;\n          line-height: 1.1vw !important;\n        }\n      }\n      /* phone */\n      @media screen and (max-width: 800px) {\n        h1 {\n          font-size: 5.5vw !important;\n          line-height: 6vw !important;\n          margin: 2vw 0 0 0 !important;\n        }\n      }\n\n#################################################\n#                                               #\n#               SWIPE CARD MARGIN               #\n#                                               #\n#################################################\n\n    $swipe-card$:\n      .: |\n        div {\n          height: 100%;\n        }\n      hui-horizontal-stack-card$:\n        .: |\n          hui-conditional-card {\n            margin: 0 !important;\n          }\n\n#################################################\n#                                               #\n#            SIDEBAR VERTICAL-STACK             #\n#                                               #\n#################################################\n\ngrid-layout$hui-vertical-stack-card$: |\n  #root {\n    background-color: rgba(0, 0, 0, 0.06);\n    border-radius: 0;\n    border-right: 0.1vw solid rgba(58, 69, 73, 0.2);\n    min-height: 100vh;\n  }\n  /* phone */\n  @media screen and (max-width: 800px) {\n    #root {\n      background-color: rgba(0,0,0,0);\n      border-right: none;\n      min-height: 100%;\n      margin-left: -0.8%;\n      margin-bottom: -6%;\n    }\n  }\n\n#################################################\n#                                               #\n#             SIDEBAR LAUNDRY TIMER             #\n#                                               #\n#################################################\n\ngrid-layout$hui-vertical-stack-card$hui-conditional-card:\n  .: |\n    hui-conditional-card {\n      display: flex;\n      justify-content: center;\n    }\n    hui-conditional-card > button-card {\n      width: 65%;\n    }\n    /* phone */\n    @media screen and (max-width: 800px) {\n      hui-conditional-card {\n        position: absolute;\n        top: 3vw;\n        right: 5.5vw;\n        padding: 19vw 0 0 0;\n      }\n      hui-conditional-card > button-card {\n        width: 100%;\n        zoom: 250%;\n        filter: contrast(75%)\n      }\n    }\n\n#################################################\n#                                               #\n#             SIDEBAR BOTTOM ICONS              #\n#                                               #\n#################################################\n\n"grid-layout$hui-vertical-stack-card$hui-grid-card":\n  .: |\n    hui-grid-card {\n      display: flex;\n      flex: auto;\n      align-items: flex-end;\n    }\n\n    /* phone */\n    @media screen and (max-width: 800px) {\n      hui-grid-card {\n        position: absolute;\n        right: 5.5vw;\n      }\n    }\n\n  $: |\n    #root {\n      width: 100%;\n      padding: 0 13% 25% 13%;\n    }\n\n    /* phone */\n    @media screen and (max-width: 800px) {\n      #root {\n        padding: 0 0 0 55%;\n      }\n    }\n\n  #conditional color\n  "$hui-button-card:last-of-type$": |\n    {% if is_state(\'binary_sensor.template_sidebar_update_color\', \'on\') %}\n\n      ha-card, ha-state-icon {\n        color: rgb(35, 78 ,106) !important;\n        opacity: 1 !important;\n        animation: update 1.5s ease-out infinite;\n      }\n\n      ha-card:hover {\n        filter: brightness(130%);\n        animation-play-state: paused;\n      }\n\n    {% endif %}\n\n      @keyframes update {\n        0% {\n          transform: scale(1);\n        }\n        40% {\n          transform: scale(1.08);\n        }\n        50% {\n          transform: scale(0.98);\n        }\n        55% {\n          transform: scale(1.02);\n        }\n        60% {\n          transform: scale(0.98);\n        }\n        100% {\n          transform: scale(1);\n        }\n      }\n',
          'card-mod-card':
            '.header .card-header {\n  font-family: SF Text, Roboto;\n  letter-spacing: 0.005em;\n  font-size: 1.6em;\n  font-weight: 500;\n  padding: 1em 0 0 1.68em;\n  line-height: initial;\n  cursor: default;\n}\n\n.content .card-content {\n  padding: var(--card-content-padding);\n}\n\n/* * * * * * * * * * * * * * * * * *\n  *                                 *\n  *           BUTTON CARD           *\n  *                                 *\n  * * * * * * * * * * * * * * * * * */\n\n.type-button {\n  display: block;\n  --paper-item-icon-color: var(--state-icon-color);\n  opacity: 0.2;\n  transition: 0.4s;\n  height: initial;\n}\n\n.type-button:hover {\n  opacity: 0.5;\n  transition: none;\n}\n\n.type-button:active {\n  opacity: 0.7;\n  transition: none;\n}\n\n/* * * * * * * * * * * * * * * * * *\n  *                                 *\n  *         CUSTOM BAR CARD         *\n  *                                 *\n  * * * * * * * * * * * * * * * * * */\n\n.type-custom-bar-card bar-card-name {\n  padding-left: 0.25em;\n}\n\n.type-custom-bar-card bar-card-iconbar {\n  padding-left: 0.23em;\n}\n\n.type-custom-bar-card bar-card-value {\n  font-size: 1em;\n  font-weight: 400;\n  color: #e0e1e1;\n  letter-spacing: 0.01em;\n  text-shadow: none;\n  margin-right: auto;\n  margin-top: 5px;\n}\n\n.type-custom-bar-card bar-card-backgroundbar {\n  background: none;\n}\n\n.type-custom-bar-card bar-card-background  {\n  background: radial-gradient(circle, rgba(52, 57, 58, 0.1) 0%, rgba(17, 18, 18, 0.2) 75%);\n  box-shadow: inset 0 0 25px #00000045;\n  border-radius: 0.3em;\n  overflow: hidden;\n}\n',
          'card-mod-more-info-yaml':
            '.: |\n  app-toolbar {\n    background: none !important;\n  }\n\n  .main-title {\n    margin-top: 5px;\n    font-family: SF Text, Roboto;\n    letter-spacing: 0.005em;\n  }\n\n  mwc-icon-button {\n    margin-top: -2px;\n    color: #9e9e9e;\n  }\n\n"mwc-icon-button":\n  $: |\n    button > mwc-ripple {\n      margin-top: 3px;\n    }\n\n"layout-card$grid-layout$": |\n    #root {\n      margin: 0 !important;\n    }\n\n$: |\n  .mdc-dialog__scrim {\n    -webkit-backdrop-filter: blur(1.5em);\n    backdrop-filter: blur(1.5em);\n    transition: none !important;\n  }\n\n  .mdc-dialog .mdc-dialog__container {\n    background: none;\n  }\n\n  .mdc-dialog__surface {\n    background: linear-gradient(180deg,\n      var(--ha-card-header-background-color) 0%,\n      var(--ha-card-header-background-color) 4.6em,\n      var(--ha-card-background-color) 4.6em,\n      var(--ha-card-background-color) 100%) !important;\n    box-shadow: none !important;\n    border-radius: 1em !important;\n  }\n\n  .mdc-dialog--closing {\n    display: none !important;\n  }\n\n#################################################\n#                                               #\n#            CUSTOM LIGHT POPUP CARD            #\n#                                               #\n#################################################\n\nlight-popup-card$: |\n  #popup {\n    margin: -2em 0 2.5em 0;\n    isolation: isolate;\n  }\n\n  input[type=range] {\n    cursor: grab;\n  }\n\n  #brightnessValue, #volumeValue {\n    color: rgba(255, 255, 255, 0.8);\n    margin: -10vh 0 0 0;\n    font-size: 2em;\n    font-weight: 400;\n    position: absolute;\n    z-index: 1;\n    font-family: SF Display, Roboto;\n    letter-spacing: 0.02em;\n    pointer-events: none;\n    mix-blend-mode: difference;\n    text-align: center;\n  }\n\n  #popup>div.range-holder>input[type=range] {\n    --slider-thumb-color: #b4b4b4 !important;\n  }\n\n  #popup>div.range-holder>input[type=range]::-webkit-slider-thumb {\n    cursor: grabbing;\n  }\n\n\nmedia_player-popup-card$: |\n  #popup {\n    margin: -2em 0 2.5em 0;\n    isolation: isolate;\n  }\n\n  input[type=range] {\n    cursor: grab;\n  }\n\n  #volumeValue {\n    color: rgba(255, 255, 255, 0.8);\n    margin: -10vh 0 0 0;\n    font-size: 2em;\n    font-weight: 400;\n    position: absolute;\n    z-index: 1;\n    font-family: SF Display, Roboto;\n    letter-spacing: 0.02em;\n    pointer-events: none;\n    mix-blend-mode: difference;\n    text-align: center;\n  }\n\n  #popup>div.range-holder>input[type=range] {\n    --slider-thumb-color: #b4b4b4 !important;\n  }\n\n  #popup>div.range-holder>input[type=range]::-webkit-slider-thumb {\n    cursor: grabbing;\n  }\n\ncct-popup-card$: |\n  #popup {\n    margin: -2em 0 2.5em 0;\n    isolation: isolate;\n  }\n\n  input[type=range] {\n    cursor: grab;\n  }\n\n  #brightnessValue {\n    color: rgba(255, 255, 255, 0.8);\n    margin: -10vh 0 0 0;\n    font-size: 2em;\n    font-weight: 400;\n    position: absolute;\n    z-index: 1;\n    font-family: SF Display, Roboto;\n    letter-spacing: 0.02em;\n    pointer-events: none;\n    mix-blend-mode: difference;\n    text-align: center;\n  }\n\n  #popup>div.range-holder>input[type=range] {\n    --slider-thumb-color: #b4b4b4 !important;\n  }\n\n  #popup>div.range-holder>input[type=range]::-webkit-slider-thumb {\n    cursor: grabbing;\n  }\n',
        },
      },
      default_theme: 'default',
      default_dark_theme: null,
      theme: 'tablet',
      darkMode: false,
    },
    selectedTheme: {
      theme: 'tablet',
    },
    panels: {
      config: {
        component_name: 'config',
        icon: 'hass:cog',
        title: 'config',
        config: null,
        url_path: 'config',
        require_admin: true,
      },
      lovelace: {
        component_name: 'lovelace',
        icon: null,
        title: null,
        config: {
          mode: 'yaml',
        },
        url_path: 'lovelace',
        require_admin: false,
      },
      hassio: {
        component_name: 'custom',
        icon: null,
        title: null,
        config: {
          _panel_custom: {
            name: 'hassio-main',
            embed_iframe: true,
            trust_external: false,
            js_url: '/api/hassio/app/entrypoint.js',
          },
        },
        url_path: 'hassio',
        require_admin: true,
      },
      profile: {
        component_name: 'profile',
        icon: null,
        title: null,
        config: null,
        url_path: 'profile',
        require_admin: false,
      },
      'developer-tools': {
        component_name: 'developer-tools',
        icon: 'hass:hammer',
        title: 'developer_tools',
        config: null,
        url_path: 'developer-tools',
        require_admin: true,
      },
      a0d7b954_nodered: {
        component_name: 'custom',
        icon: 'mdi:sitemap',
        title: 'Node-RED',
        config: {
          ingress: 'a0d7b954_nodered',
          _panel_custom: {
            name: 'hassio-main',
            embed_iframe: true,
            trust_external: false,
            js_url: '/api/hassio/app/entrypoint.js',
          },
        },
        url_path: 'a0d7b954_nodered',
        require_admin: true,
      },
      a0d7b954_ssh: {
        component_name: 'custom',
        icon: 'mdi:console',
        title: 'Terminal',
        config: {
          ingress: 'a0d7b954_ssh',
          _panel_custom: {
            name: 'hassio-main',
            embed_iframe: true,
            trust_external: false,
            js_url: '/api/hassio/app/entrypoint.js',
          },
        },
        url_path: 'a0d7b954_ssh',
        require_admin: true,
      },
      core_configurator: {
        component_name: 'custom',
        icon: 'mdi:wrench',
        title: 'File editor',
        config: {
          ingress: 'core_configurator',
          _panel_custom: {
            name: 'hassio-main',
            embed_iframe: true,
            trust_external: false,
            js_url: '/api/hassio/app/entrypoint.js',
          },
        },
        url_path: 'core_configurator',
        require_admin: true,
      },
      'a0d7b954_home-panel': {
        component_name: 'custom',
        icon: 'mdi:home',
        title: 'Home Panel',
        config: {
          ingress: 'a0d7b954_home-panel',
          _panel_custom: {
            name: 'hassio-main',
            embed_iframe: true,
            trust_external: false,
            js_url: '/api/hassio/app/entrypoint.js',
          },
        },
        url_path: 'a0d7b954_home-panel',
        require_admin: true,
      },
      logbook: {
        component_name: 'logbook',
        icon: 'hass:format-list-bulleted-type',
        title: 'logbook',
        config: null,
        url_path: 'logbook',
        require_admin: false,
      },
      'media-browser': {
        component_name: 'media-browser',
        icon: 'hass:play-box-multiple',
        title: 'media_browser',
        config: null,
        url_path: 'media-browser',
        require_admin: false,
      },
      _my_redirect: {
        component_name: 'my',
        icon: null,
        title: null,
        config: null,
        url_path: '_my_redirect',
        require_admin: false,
      },
      history: {
        component_name: 'history',
        icon: 'hass:chart-box',
        title: 'history',
        config: null,
        url_path: 'history',
        require_admin: false,
      },
      map: {
        component_name: 'map',
        icon: 'hass:tooltip-account',
        title: 'map',
        config: null,
        url_path: 'map',
        require_admin: false,
      },
      energy: {
        component_name: 'energy',
        icon: 'mdi:lightning-bolt',
        title: 'energy',
        config: null,
        url_path: 'energy',
        require_admin: false,
      },
      hacs: {
        component_name: 'custom',
        icon: 'hacs:hacs',
        title: 'HACS',
        config: {
          _panel_custom: {
            name: 'hacs-frontend',
            embed_iframe: true,
            trust_external: false,
            js_url: '/hacsfiles/frontend/entrypoint.js?hacstag=20211231144850',
          },
        },
        url_path: 'hacs',
        require_admin: true,
      },
    },
    services: {
      homeassistant: {
        save_persistent_states: {
          name: 'Save Persistent States',
          description:
            'Save the persistent states (for entities derived from RestoreEntity) immediately. Maintain the normal periodic saving interval.',
          fields: {},
        },
        turn_off: {
          name: 'Generic turn off',
          description: 'Generic service to turn devices off under any domain.',
          fields: {},
          target: {
            entity: {},
          },
        },
        turn_on: {
          name: 'Generic turn on',
          description: 'Generic service to turn devices on under any domain.',
          fields: {},
          target: {
            entity: {},
          },
        },
        toggle: {
          name: 'Generic toggle',
          description:
            'Generic service to toggle devices on/off under any domain',
          fields: {},
          target: {
            entity: {},
          },
        },
        stop: {
          name: 'Stop',
          description: 'Stop the Home Assistant service.',
          fields: {},
        },
        restart: {
          name: 'Restart',
          description: 'Restart the Home Assistant service.',
          fields: {},
        },
        check_config: {
          name: 'Check configuration',
          description:
            'Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.',
          fields: {},
        },
        update_entity: {
          name: 'Update entity',
          description: 'Force one or more entities to update its data',
          fields: {},
          target: {
            entity: {},
          },
        },
        reload_core_config: {
          name: 'Reload core configuration',
          description: 'Reload the core configuration.',
          fields: {},
        },
        set_location: {
          name: 'Set location',
          description: 'Update the Home Assistant location.',
          fields: {
            latitude: {
              name: 'Latitude',
              description: 'Latitude of your location.',
              required: true,
              example: 32.87336,
              selector: {
                text: null,
              },
            },
            longitude: {
              name: 'Longitude',
              description: 'Longitude of your location.',
              required: true,
              example: 117.22743,
              selector: {
                text: null,
              },
            },
          },
        },
        reload_config_entry: {
          name: 'Reload config entry',
          description: 'Reload a config entry that matches a target.',
          fields: {
            entry_id: {
              advanced: true,
              name: 'Config entry id',
              description: 'A configuration entry id',
              required: false,
              example: '8955375327824e14ba89e4b29cc3ec9a',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {},
            device: {},
          },
        },
      },
      persistent_notification: {
        create: {
          name: 'Create',
          description: 'Show a notification in the frontend.',
          fields: {
            message: {
              name: 'Message',
              description:
                'Message body of the notification. [Templates accepted]',
              required: true,
              example: 'Please check your configuration.yaml.',
              selector: {
                text: null,
              },
            },
            title: {
              name: 'Title',
              description:
                'Optional title for your notification. [Templates accepted]',
              example: 'Test notification',
              selector: {
                text: null,
              },
            },
            notification_id: {
              name: 'Notification ID',
              description:
                'Target ID of the notification, will replace a notification with the same ID.',
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
        },
        dismiss: {
          name: 'Dismiss',
          description: 'Remove a notification from the frontend.',
          fields: {
            notification_id: {
              name: 'Notification ID',
              description:
                'Target ID of the notification, which should be removed.',
              required: true,
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
        },
        mark_read: {
          name: 'Mark read',
          description: 'Mark a notification read.',
          fields: {
            notification_id: {
              name: 'Notification ID',
              description:
                'Target ID of the notification, which should be mark read.',
              required: true,
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
        },
      },
      recorder: {
        purge: {
          name: 'Purge',
          description:
            'Start purge task - to clean up old data from your database.',
          fields: {
            keep_days: {
              name: 'Days to keep',
              description:
                'Number of history days to keep in database after purge.',
              selector: {
                number: {
                  min: 0,
                  max: 365,
                  unit_of_measurement: 'days',
                },
              },
            },
            repack: {
              name: 'Repack',
              description:
                'Attempt to save disk space by rewriting the entire database file.',
              default: false,
              selector: {
                boolean: null,
              },
            },
            apply_filter: {
              name: 'Apply filter',
              description:
                'Apply entity_id and event_type filter in addition to time based purge.',
              default: false,
              selector: {
                boolean: null,
              },
            },
          },
        },
        purge_entities: {
          name: 'Purge Entities',
          description:
            'Start purge task to remove specific entities from your database.',
          fields: {
            domains: {
              name: 'Domains to remove',
              description:
                'List the domains that need to be removed from the recorder database.',
              example: 'sun',
              required: false,
              default: [],
              selector: {
                object: null,
              },
            },
            entity_globs: {
              name: 'Entity Globs to remove',
              description:
                'List the regular expressions to select entities for removal from the recorder database.',
              example: 'domain*.object_id*',
              required: false,
              default: [],
              selector: {
                object: null,
              },
            },
          },
          target: {
            entity: {},
          },
        },
        enable: {
          name: 'Enable',
          description: 'Start the recording of events and state changes',
          fields: {},
        },
        disable: {
          name: 'Disable',
          description: 'Stop the recording of events and state changes',
          fields: {},
        },
      },
      system_log: {
        clear: {
          name: 'Clear all',
          description: 'Clear all log entries.',
          fields: {},
        },
        write: {
          name: 'Write',
          description: 'Write log entry.',
          fields: {
            message: {
              name: 'Message',
              description: 'Message to log.',
              required: true,
              example: 'Something went wrong',
              selector: {
                text: null,
              },
            },
            level: {
              name: 'Level',
              description: 'Log level.',
              default: 'error',
              selector: {
                select: {
                  options: ['debug', 'info', 'warning', 'error', 'critical'],
                },
              },
            },
            logger: {
              name: 'Logger',
              description:
                "Logger name under which to log the message. Defaults to 'system_log.external'.",
              example: 'mycomponent.myplatform',
              selector: {
                text: null,
              },
            },
          },
        },
      },
      lovelace: {
        reload_resources: {
          name: 'Reload resources',
          description: 'Reload Lovelace resources from YAML configuration',
          fields: {},
        },
      },
      cloud: {
        remote_connect: {
          name: 'Remote connect',
          description: 'Make instance UI available outside over NabuCasa cloud',
          fields: {},
        },
        remote_disconnect: {
          name: 'Remote disconnect',
          description: 'Disconnect UI from NabuCasa cloud',
          fields: {},
        },
      },
      person: {
        reload: {
          name: 'Reload',
          description: 'Reload the person configuration.',
          fields: {},
        },
      },
      frontend: {
        set_theme: {
          name: 'Set theme',
          description:
            'Set a theme unless the client selected per-device theme.',
          fields: {
            name: {
              name: 'Name',
              description: "Name of a predefined theme, 'default' or 'none'.",
              required: true,
              example: 'default',
              selector: {
                text: null,
              },
            },
            mode: {
              name: 'Mode',
              description: 'The mode the theme is for.',
              default: 'light',
              selector: {
                select: {
                  options: ['dark', 'light'],
                },
              },
            },
          },
        },
        reload_themes: {
          name: 'Reload themes',
          description: 'Reload themes from YAML configuration.',
          fields: {},
        },
      },
      hassio: {
        addon_start: {
          name: 'Start add-on',
          description: 'Start add-on.',
          fields: {
            addon: {
              name: 'Add-on',
              required: true,
              description: 'The add-on slug.',
              example: 'core_ssh',
              selector: {
                addon: null,
              },
            },
          },
        },
        addon_stop: {
          name: 'Stop add-on.',
          description: 'Stop add-on.',
          fields: {
            addon: {
              name: 'Add-on',
              required: true,
              description: 'The add-on slug.',
              example: 'core_ssh',
              selector: {
                addon: null,
              },
            },
          },
        },
        addon_restart: {
          name: 'Restart add-on.',
          description: 'Restart add-on.',
          fields: {
            addon: {
              name: 'Add-on',
              required: true,
              description: 'The add-on slug.',
              example: 'core_ssh',
              selector: {
                addon: null,
              },
            },
          },
        },
        addon_update: {
          name: 'Update add-on.',
          description:
            'Update add-on. This service should be used with caution since add-on updates can contain breaking changes. It is highly recommended that you review release notes/change logs before updating an add-on.',
          fields: {
            addon: {
              name: 'Add-on',
              required: true,
              description: 'The add-on slug.',
              example: 'core_ssh',
              selector: {
                addon: null,
              },
            },
          },
        },
        addon_stdin: {
          name: 'Write data to add-on stdin.',
          description: 'Write data to add-on stdin.',
          fields: {
            addon: {
              name: 'Add-on',
              required: true,
              description: 'The add-on slug.',
              example: 'core_ssh',
              selector: {
                addon: null,
              },
            },
          },
        },
        host_shutdown: {
          name: 'Poweroff the host system.',
          description: 'Poweroff the host system.',
          fields: {},
        },
        host_reboot: {
          name: 'Reboot the host system.',
          description: 'Reboot the host system.',
          fields: {},
        },
        backup_full: {
          name: 'Create a full backup.',
          description: 'Create a full backup.',
          fields: {
            name: {
              name: 'Name',
              description: 'Optional (default = current date and time).',
              example: 'Backup 1',
              selector: {
                text: null,
              },
            },
            password: {
              name: 'Password',
              description: 'Optional password.',
              example: 'password',
              selector: {
                text: null,
              },
            },
          },
        },
        backup_partial: {
          name: 'Create a partial backup.',
          description: 'Create a partial backup.',
          fields: {
            addons: {
              name: 'Add-ons',
              description: 'Optional list of add-on slugs.',
              example: ['core_ssh', 'core_samba', 'core_mosquitto'],
              selector: {
                object: null,
              },
            },
            folders: {
              name: 'Folders',
              description: 'Optional list of directories.',
              example: ['homeassistant', 'share'],
              selector: {
                object: null,
              },
            },
            name: {
              name: 'Name',
              description: 'Optional (default = current date and time).',
              example: 'Partial backup 1',
              selector: {
                text: null,
              },
            },
            password: {
              name: 'Password',
              description: 'Optional password.',
              example: 'password',
              selector: {
                text: null,
              },
            },
          },
        },
        restore_full: {
          name: 'Restore from full backup.',
          description: 'Restore from full backup.',
          fields: {
            slug: {
              name: 'Slug',
              required: true,
              description: 'Slug of backup to restore from.',
              selector: {
                text: null,
              },
            },
            password: {
              name: 'Password',
              description: 'Optional password.',
              example: 'password',
              selector: {
                text: null,
              },
            },
          },
        },
        restore_partial: {
          name: 'Restore from partial backup.',
          description: 'Restore from partial backup.',
          fields: {
            slug: {
              name: 'Slug',
              required: true,
              description: 'Slug of backup to restore from.',
              selector: {
                text: null,
              },
            },
            homeassistant: {
              name: 'Home Assistant settings',
              description: 'Restore Home Assistant',
              selector: {
                boolean: null,
              },
            },
            folders: {
              name: 'Folders',
              description: 'Optional list of directories.',
              example: ['homeassistant', 'share'],
              selector: {
                object: null,
              },
            },
            addons: {
              name: 'Add-ons',
              description: 'Optional list of add-on slugs.',
              example: ['core_ssh', 'core_samba', 'core_mosquitto'],
              selector: {
                object: null,
              },
            },
            password: {
              name: 'Password',
              description: 'Optional password.',
              example: 'password',
              selector: {
                text: null,
              },
            },
          },
        },
      },
      logbook: {
        log: {
          name: 'Log',
          description: 'Create a custom entry in your logbook.',
          fields: {
            name: {
              name: 'Name',
              description:
                'Custom name for an entity, can be referenced with entity_id.',
              required: true,
              example: 'Kitchen',
              selector: {
                text: null,
              },
            },
            message: {
              name: 'Message',
              description: 'Message of the custom logbook entry.',
              required: true,
              example: 'is being used',
              selector: {
                text: null,
              },
            },
            entity_id: {
              name: 'Entity ID',
              description: 'Entity to reference in custom logbook entry.',
              selector: {
                entity: null,
              },
            },
            domain: {
              name: 'Domain',
              description: 'Icon of domain to display in custom logbook entry.',
              example: 'light',
              selector: {
                text: null,
              },
            },
          },
        },
      },
      browser_mod: {
        command: {
          name: '',
          description: 'Send a command to a browser.',
          fields: {
            command: {
              description: 'Command to send',
              example: 'navigate',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        debug: {
          name: '',
          description:
            'On all browsers, show a popup, and a javascript alert with the current device ID.',
          fields: {
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        popup: {
          name: '',
          description: 'Pop up a card on a browser.',
          fields: {
            title: {
              description: 'Name to show in popup bar',
              example: 'Popup example',
            },
            card: {
              description: 'YAML config for card to show',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
            large: {
              description: '(optional) Set to true to make wider',
              example: 'true',
            },
            hide_header: {
              description: '(optional) Hide header title and close button',
              example: 'true',
            },
            auto_close: {
              description:
                '(optional) Close popup when mouse is moved or key is pressed. Also hides header',
              example: 'true',
            },
            time: {
              description:
                "(optional) When mouse isn't moved or keys aren't pressed for this amount of seconds, reopen. Only usable with auto_close. See blackout",
              example: '20',
            },
          },
        },
        close_popup: {
          name: '',
          description: 'Close all popups on all browsers.',
          fields: {
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        navigate: {
          name: '',
          description: 'Navigate to a path on a browser.',
          fields: {
            navigation_path: {
              description: 'Path to navigate to',
              example: '/lovelace/1',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        more_info: {
          name: '',
          description: 'Open the more info dialog of an entity on a browser.',
          fields: {
            entity_id: {
              description: 'Entity to show more info for',
              example: 'camera.front_door',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
            large: {
              description: '(optional) Set to true to make wider',
              example: 'true',
            },
          },
        },
        set_theme: {
          name: '',
          description: 'On all browsers, change the theme.',
          fields: {
            theme: {
              description: 'Theme to change to',
              example: '{theme: "clear_light"}',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        lovelace_reload: {
          name: '',
          description: 'Refresh the lovelace configuration.',
          fields: {
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        window_reload: {
          name: '',
          description: '',
          fields: {},
        },
        blackout: {
          name: '',
          description:
            'Cover screen in black until the mouse is moved or a key is pressed.',
          fields: {
            time: {
              description:
                '(optional) The blackout will turn on automatically after the specified number of seconds. It works kind of like a screensaver and will keep turning on until blackout is called again with time: -1.',
              example: '20',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        no_blackout: {
          name: '',
          description: 'Remove a blackout from a browser.',
          fields: {
            brightness: {
              description:
                '(optional) On a Fully Kiosk Browser Plus set the screen brightness from 0 - 255.',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        toast: {
          name: '',
          description:
            'Show a toast message in the bottom left on all browsers.',
          fields: {
            message: {
              description: 'Message to show',
              example: 'Short message',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
            duration: {
              description:
                '(optional) Time in milliseconds to show message for. Set to 0 for persistent display.',
              example: '10000',
            },
          },
        },
        commands: {
          name: '',
          description: 'Send several commands to a browser',
          fields: {
            commands: {
              description: 'List of commands to send',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        call_service: {
          name: '',
          description: '',
          fields: {},
        },
        delay: {
          name: '',
          description: 'Do nothing for a while',
          fields: {
            seconds: {
              description: 'Number of seconds to delay',
              example: '5',
            },
            deviceID: {
              description: '(optional) List of receiving browsers',
              example: '["99980b13-dabc9563", "office_computer"]',
            },
          },
        },
        clean_devices: {
          name: '',
          description: '',
          fields: {},
        },
      },
      scene: {
        reload: {
          name: 'Reload',
          description: 'Reload the scene configuration.',
          fields: {},
        },
        apply: {
          name: 'Apply',
          description: 'Activate a scene with configuration.',
          fields: {
            entities: {
              name: 'Entities state',
              description: 'The entities and the state that they need to be.',
              required: true,
              example: {
                'light.kitchen': 'on',
                'light.ceiling': {
                  state: 'on',
                  brightness: 80,
                },
              },
              selector: {
                object: null,
              },
            },
            transition: {
              name: 'Transition',
              description:
                'Transition duration it takes to bring devices to the state defined in the scene.',
              selector: {
                number: {
                  min: 0,
                  max: 300,
                  unit_of_measurement: 'seconds',
                },
              },
            },
          },
        },
        create: {
          name: 'Create',
          description: 'Creates a new scene.',
          fields: {
            scene_id: {
              name: 'Scene entity ID',
              description: 'The entity_id of the new scene.',
              required: true,
              example: 'all_lights',
              selector: {
                text: null,
              },
            },
            entities: {
              name: 'Entities state',
              description: 'The entities to control with the scene.',
              example: {
                'light.tv_back_light': 'on',
                'light.ceiling': {
                  state: 'on',
                  brightness: 200,
                },
              },
              selector: {
                object: null,
              },
            },
            snapshot_entities: {
              name: 'Snapshot entities',
              description: 'The entities of which a snapshot is to be taken',
              example: ['light.ceiling', 'light.kitchen'],
              selector: {
                object: null,
              },
            },
          },
        },
        turn_on: {
          name: 'Activate',
          description: 'Activate a scene.',
          fields: {
            transition: {
              name: 'Transition',
              description:
                'Transition duration it takes to bring devices to the state defined in the scene.',
              selector: {
                number: {
                  min: 0,
                  max: 300,
                  unit_of_measurement: 'seconds',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'scene',
            },
          },
        },
      },
      media_player: {
        turn_on: {
          name: 'Turn on',
          description: 'Turn a media player power on.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turn a media player power off.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggles a media player power state.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        volume_up: {
          name: 'Turn up volume',
          description: 'Turn a media player volume up.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        volume_down: {
          name: 'Turn down volume',
          description: 'Turn a media player volume down.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_play_pause: {
          name: 'Play/Pause',
          description: 'Toggle media player play/pause state.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_play: {
          name: 'Play',
          description: 'Send the media player the command for play.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_pause: {
          name: 'Pause',
          description: 'Send the media player the command for pause.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_stop: {
          name: 'Stop',
          description: 'Send the media player the stop command.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_next_track: {
          name: 'Next',
          description: 'Send the media player the command for next track.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_previous_track: {
          name: 'Previous',
          description: 'Send the media player the command for previous track.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        clear_playlist: {
          name: 'Clear playlist',
          description:
            'Send the media player the command to clear players playlist.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        volume_set: {
          name: 'Set volume',
          description: "Set a media player's volume level.",
          fields: {
            volume_level: {
              name: 'Level',
              description: 'Volume level to set as float.',
              required: true,
              selector: {
                number: {
                  min: 0,
                  max: 1,
                  step: 0.01,
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        volume_mute: {
          name: 'Mute volume',
          description: "Mute a media player's volume.",
          fields: {
            is_volume_muted: {
              name: 'Muted',
              description: 'True/false for mute/unmute.',
              required: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        media_seek: {
          name: 'Seek',
          description:
            'Send the media player the command to seek in current playing media.',
          fields: {
            seek_position: {
              name: 'Position',
              description:
                'Position to seek to. The format is platform dependent.',
              required: true,
              selector: {
                number: {
                  min: 0,
                  max: 9223372036854776000,
                  step: 0.01,
                  mode: 'box',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        join: {
          name: 'Join',
          description:
            'Group players together. Only works on platforms with support for player groups.',
          fields: {
            group_members: {
              name: 'Group members',
              description:
                'The players which will be synced with the target player.',
              example: [
                'media_player.multiroom_player2',
                'media_player.multiroom_player3',
              ],
              selector: {
                object: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        select_source: {
          name: 'Select source',
          description:
            'Send the media player the command to change input source.',
          fields: {
            source: {
              name: 'Source',
              description:
                'Name of the source to switch to. Platform dependent.',
              required: true,
              example: 'video1',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        select_sound_mode: {
          name: 'Select sound mode',
          description:
            'Send the media player the command to change sound mode.',
          fields: {
            sound_mode: {
              name: 'Sound mode',
              description: 'Name of the sound mode to switch to.',
              example: 'Music',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        play_media: {
          name: 'Play media',
          description: 'Send the media player the command for playing media.',
          fields: {
            media_content_id: {
              name: 'Content ID',
              description: 'The ID of the content to play. Platform dependent.',
              required: true,
              example: 'https://home-assistant.io/images/cast/splash.png',
              selector: {
                text: null,
              },
            },
            media_content_type: {
              name: 'Content type',
              description:
                'The type of the content to play. Like image, music, tvshow, video, episode, channel or playlist.',
              required: true,
              example: 'music',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        shuffle_set: {
          name: 'Shuffle',
          description: 'Set shuffling state.',
          fields: {
            shuffle: {
              name: 'Shuffle',
              description: 'True/false for enabling/disabling shuffle.',
              required: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        unjoin: {
          name: 'Unjoin',
          description:
            'Unjoin the player from a group. Only works on platforms with support for player groups.',
          fields: {},
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
        repeat_set: {
          name: 'Repeat',
          description: 'Set repeat mode',
          fields: {
            repeat: {
              name: 'Repeat mode',
              description: 'Repeat mode to set.',
              required: true,
              selector: {
                select: {
                  options: ['off', 'all', 'one'],
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'media_player',
            },
          },
        },
      },
      group: {
        reload: {
          name: 'Reload',
          description:
            'Reload group configuration, entities, and notify services.',
          fields: {},
        },
        set: {
          name: 'Set',
          description: 'Create/Update a user group.',
          fields: {
            object_id: {
              name: 'Object ID',
              description: 'Group id and part of entity id.',
              required: true,
              example: 'test_group',
              selector: {
                text: null,
              },
            },
            name: {
              name: 'Name',
              description: 'Name of group',
              example: 'My test group',
              selector: {
                text: null,
              },
            },
            icon: {
              name: 'Icon',
              description: 'Name of icon for the group.',
              example: 'mdi:camera',
              selector: {
                text: null,
              },
            },
            entities: {
              name: 'Entities',
              description:
                "List of all members in the group. Not compatible with 'delta'.",
              example: 'domain.entity_id1, domain.entity_id2',
              selector: {
                object: null,
              },
            },
            add_entities: {
              name: 'Add Entities',
              description:
                'List of members that will change on group listening.',
              example: 'domain.entity_id1, domain.entity_id2',
              selector: {
                object: null,
              },
            },
            all: {
              name: 'All',
              description:
                'Enable this option if the group should only turn on when all entities are on.',
              selector: {
                boolean: null,
              },
            },
          },
        },
        remove: {
          name: 'Remove',
          description: 'Remove a user group.',
          fields: {
            object_id: {
              name: 'Object ID',
              description: 'Group id and part of entity id.',
              required: true,
              example: 'test_group',
              selector: {
                object: null,
              },
            },
          },
        },
      },
      snapcast: {
        snapshot: {
          name: 'Snapshot',
          description: 'Take a snapshot of the media player.',
          fields: {},
          target: {
            entity: {
              integration: 'snapcast',
              domain: 'media_player',
            },
          },
        },
        restore: {
          name: 'Restore',
          description: 'Restore a snapshot of the media player.',
          fields: {},
          target: {
            entity: {
              integration: 'snapcast',
              domain: 'media_player',
            },
          },
        },
        join: {
          name: 'Join',
          description: 'Group players together.',
          fields: {
            master: {
              name: 'Master',
              description: 'Entity ID of the player to synchronize to.',
              required: true,
              selector: {
                entity: {
                  integration: 'snapcast',
                  domain: 'media_player',
                },
              },
            },
            entity_id: {
              name: 'Entity',
              description: 'The players to join to the "master".',
              selector: {
                target: {
                  entity: {
                    integration: 'snapcast',
                    domain: 'media_player',
                  },
                },
              },
            },
          },
        },
        unjoin: {
          name: 'Unjoin',
          description: 'Unjoin the player from a group.',
          fields: {},
          target: {
            entity: {
              integration: 'snapcast',
              domain: 'media_player',
            },
          },
        },
        set_latency: {
          name: 'Set latency',
          description: 'Set client set_latency',
          fields: {
            latency: {
              name: 'Latency',
              description: 'Latency in master',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 1000,
                  unit_of_measurement: 'ms',
                },
              },
            },
          },
          target: {
            entity: {
              integration: 'snapcast',
              domain: 'media_player',
            },
          },
        },
      },
      ffmpeg: {
        start: {
          name: 'Start',
          description: 'Send a start command to a ffmpeg based sensor.',
          fields: {
            entity_id: {
              name: 'Entity',
              description:
                'Name of entity that will start. Platform dependent.',
              selector: {
                entity: {
                  integration: 'ffmpeg',
                  domain: 'binary_sensor',
                },
              },
            },
          },
        },
        stop: {
          name: 'Stop',
          description: 'Send a stop command to a ffmpeg based sensor.',
          fields: {
            entity_id: {
              name: 'Entity',
              description: 'Name of entity that will stop. Platform dependent.',
              selector: {
                entity: {
                  integration: 'ffmpeg',
                  domain: 'binary_sensor',
                },
              },
            },
          },
        },
        restart: {
          name: 'Restart',
          description: 'Send a restart command to a ffmpeg based sensor.',
          fields: {
            entity_id: {
              name: 'Entity',
              description:
                'Name of entity that will restart. Platform dependent.',
              selector: {
                entity: {
                  integration: 'ffmpeg',
                  domain: 'binary_sensor',
                },
              },
            },
          },
        },
      },
      light: {
        turn_on: {
          name: 'Turn on',
          description:
            'Turn on one or more lights and adjust properties of the light, even when they are turned on already.\n',
          fields: {
            transition: {
              name: 'Transition',
              description: 'Duration it takes to get to next state.',
              selector: {
                number: {
                  min: 0,
                  max: 300,
                  unit_of_measurement: 'seconds',
                },
              },
            },
            rgb_color: {
              name: 'RGB-color',
              description:
                'A list containing three integers between 0 and 255 representing the RGB (red, green, blue) color for the light.',
              advanced: true,
              example: '[255, 100, 100]',
              selector: {
                object: null,
              },
            },
            rgbw_color: {
              name: 'RGBW-color',
              description:
                'A list containing four integers between 0 and 255 representing the RGBW (red, green, blue, white) color for the light.',
              advanced: true,
              example: '[255, 100, 100, 50]',
              selector: {
                object: null,
              },
            },
            rgbww_color: {
              name: 'RGBWW-color',
              description:
                'A list containing five integers between 0 and 255 representing the RGBWW (red, green, blue, cold white, warm white) color for the light.',
              advanced: true,
              example: '[255, 100, 100, 50, 70]',
              selector: {
                object: null,
              },
            },
            color_name: {
              name: 'Color name',
              description: 'A human readable color name.',
              advanced: true,
              selector: {
                select: {
                  options: [
                    'homeassistant',
                    'aliceblue',
                    'antiquewhite',
                    'aqua',
                    'aquamarine',
                    'azure',
                    'beige',
                    'bisque',
                    'blanchedalmond',
                    'blue',
                    'blueviolet',
                    'brown',
                    'burlywood',
                    'cadetblue',
                    'chartreuse',
                    'chocolate',
                    'coral',
                    'cornflowerblue',
                    'cornsilk',
                    'crimson',
                    'cyan',
                    'darkblue',
                    'darkcyan',
                    'darkgoldenrod',
                    'darkgray',
                    'darkgreen',
                    'darkgrey',
                    'darkkhaki',
                    'darkmagenta',
                    'darkolivegreen',
                    'darkorange',
                    'darkorchid',
                    'darkred',
                    'darksalmon',
                    'darkseagreen',
                    'darkslateblue',
                    'darkslategray',
                    'darkslategrey',
                    'darkturquoise',
                    'darkviolet',
                    'deeppink',
                    'deepskyblue',
                    'dimgray',
                    'dimgrey',
                    'dodgerblue',
                    'firebrick',
                    'floralwhite',
                    'forestgreen',
                    'fuchsia',
                    'gainsboro',
                    'ghostwhite',
                    'gold',
                    'goldenrod',
                    'gray',
                    'green',
                    'greenyellow',
                    'grey',
                    'honeydew',
                    'hotpink',
                    'indianred',
                    'indigo',
                    'ivory',
                    'khaki',
                    'lavender',
                    'lavenderblush',
                    'lawngreen',
                    'lemonchiffon',
                    'lightblue',
                    'lightcoral',
                    'lightcyan',
                    'lightgoldenrodyellow',
                    'lightgray',
                    'lightgreen',
                    'lightgrey',
                    'lightpink',
                    'lightsalmon',
                    'lightseagreen',
                    'lightskyblue',
                    'lightslategray',
                    'lightslategrey',
                    'lightsteelblue',
                    'lightyellow',
                    'lime',
                    'limegreen',
                    'linen',
                    'magenta',
                    'maroon',
                    'mediumaquamarine',
                    'mediumblue',
                    'mediumorchid',
                    'mediumpurple',
                    'mediumseagreen',
                    'mediumslateblue',
                    'mediumspringgreen',
                    'mediumturquoise',
                    'mediumvioletred',
                    'midnightblue',
                    'mintcream',
                    'mistyrose',
                    'moccasin',
                    'navajowhite',
                    'navy',
                    'navyblue',
                    'oldlace',
                    'olive',
                    'olivedrab',
                    'orange',
                    'orangered',
                    'orchid',
                    'palegoldenrod',
                    'palegreen',
                    'paleturquoise',
                    'palevioletred',
                    'papayawhip',
                    'peachpuff',
                    'peru',
                    'pink',
                    'plum',
                    'powderblue',
                    'purple',
                    'red',
                    'rosybrown',
                    'royalblue',
                    'saddlebrown',
                    'salmon',
                    'sandybrown',
                    'seagreen',
                    'seashell',
                    'sienna',
                    'silver',
                    'skyblue',
                    'slateblue',
                    'slategray',
                    'slategrey',
                    'snow',
                    'springgreen',
                    'steelblue',
                    'tan',
                    'teal',
                    'thistle',
                    'tomato',
                    'turquoise',
                    'violet',
                    'wheat',
                    'white',
                    'whitesmoke',
                    'yellow',
                    'yellowgreen',
                  ],
                },
              },
            },
            hs_color: {
              name: 'Hue/Sat color',
              description:
                'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
              advanced: true,
              example: '[300, 70]',
              selector: {
                object: null,
              },
            },
            xy_color: {
              name: 'XY-color',
              description: 'Color for the light in XY-format.',
              advanced: true,
              example: '[0.52, 0.43]',
              selector: {
                object: null,
              },
            },
            color_temp: {
              name: 'Color temperature (mireds)',
              description: 'Color temperature for the light in mireds.',
              advanced: true,
              selector: {
                number: {
                  min: 153,
                  max: 500,
                  unit_of_measurement: 'mireds',
                },
              },
            },
            kelvin: {
              name: 'Color temperature (Kelvin)',
              description: 'Color temperature for the light in Kelvin.',
              advanced: true,
              selector: {
                number: {
                  min: 2000,
                  max: 6500,
                  step: 100,
                  unit_of_measurement: 'K',
                },
              },
            },
            brightness: {
              name: 'Brightness value',
              description:
                'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
              advanced: true,
              selector: {
                number: {
                  min: 0,
                  max: 255,
                },
              },
            },
            brightness_pct: {
              name: 'Brightness',
              description:
                'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness and 100 is the maximum brightness supported by the light.',
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
            brightness_step: {
              name: 'Brightness step value',
              description: 'Change brightness by an amount.',
              advanced: true,
              selector: {
                number: {
                  min: -225,
                  max: 255,
                },
              },
            },
            brightness_step_pct: {
              name: 'Brightness step',
              description: 'Change brightness by a percentage.',
              selector: {
                number: {
                  min: -100,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
            white: {
              name: 'White',
              description:
                'Set the light to white mode and change its brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
              advanced: true,
              selector: {
                number: {
                  min: 0,
                  max: 255,
                },
              },
            },
            profile: {
              name: 'Profile',
              description: 'Name of a light profile to use.',
              advanced: true,
              example: 'relax',
              selector: {
                text: null,
              },
            },
            flash: {
              name: 'Flash',
              description: 'If the light should flash.',
              advanced: true,
              selector: {
                select: {
                  options: ['long', 'short'],
                },
              },
            },
            effect: {
              name: 'Effect',
              description: 'Light effect.',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'light',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turns off one or more lights.',
          fields: {
            transition: {
              name: 'Transition',
              description: 'Duration it takes to get to next state.',
              selector: {
                number: {
                  min: 0,
                  max: 300,
                  unit_of_measurement: 'seconds',
                },
              },
            },
            flash: {
              name: 'Flash',
              description: 'If the light should flash.',
              advanced: true,
              selector: {
                select: {
                  options: ['long', 'short'],
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'light',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description:
            'Toggles one or more lights, from on to off, or, off to on, based on their current state.\n',
          fields: {
            transition: {
              name: 'Transition',
              description: 'Duration it takes to get to next state.',
              selector: {
                number: {
                  min: 0,
                  max: 300,
                  unit_of_measurement: 'seconds',
                },
              },
            },
            rgb_color: {
              name: 'RGB-color',
              description: 'Color for the light in RGB-format.',
              advanced: true,
              example: '[255, 100, 100]',
              selector: {
                object: null,
              },
            },
            color_name: {
              name: 'Color name',
              description: 'A human readable color name.',
              advanced: true,
              selector: {
                select: {
                  options: [
                    'homeassistant',
                    'aliceblue',
                    'antiquewhite',
                    'aqua',
                    'aquamarine',
                    'azure',
                    'beige',
                    'bisque',
                    'blanchedalmond',
                    'blue',
                    'blueviolet',
                    'brown',
                    'burlywood',
                    'cadetblue',
                    'chartreuse',
                    'chocolate',
                    'coral',
                    'cornflowerblue',
                    'cornsilk',
                    'crimson',
                    'cyan',
                    'darkblue',
                    'darkcyan',
                    'darkgoldenrod',
                    'darkgray',
                    'darkgreen',
                    'darkgrey',
                    'darkkhaki',
                    'darkmagenta',
                    'darkolivegreen',
                    'darkorange',
                    'darkorchid',
                    'darkred',
                    'darksalmon',
                    'darkseagreen',
                    'darkslateblue',
                    'darkslategray',
                    'darkslategrey',
                    'darkturquoise',
                    'darkviolet',
                    'deeppink',
                    'deepskyblue',
                    'dimgray',
                    'dimgrey',
                    'dodgerblue',
                    'firebrick',
                    'floralwhite',
                    'forestgreen',
                    'fuchsia',
                    'gainsboro',
                    'ghostwhite',
                    'gold',
                    'goldenrod',
                    'gray',
                    'green',
                    'greenyellow',
                    'grey',
                    'honeydew',
                    'hotpink',
                    'indianred',
                    'indigo',
                    'ivory',
                    'khaki',
                    'lavender',
                    'lavenderblush',
                    'lawngreen',
                    'lemonchiffon',
                    'lightblue',
                    'lightcoral',
                    'lightcyan',
                    'lightgoldenrodyellow',
                    'lightgray',
                    'lightgreen',
                    'lightgrey',
                    'lightpink',
                    'lightsalmon',
                    'lightseagreen',
                    'lightskyblue',
                    'lightslategray',
                    'lightslategrey',
                    'lightsteelblue',
                    'lightyellow',
                    'lime',
                    'limegreen',
                    'linen',
                    'magenta',
                    'maroon',
                    'mediumaquamarine',
                    'mediumblue',
                    'mediumorchid',
                    'mediumpurple',
                    'mediumseagreen',
                    'mediumslateblue',
                    'mediumspringgreen',
                    'mediumturquoise',
                    'mediumvioletred',
                    'midnightblue',
                    'mintcream',
                    'mistyrose',
                    'moccasin',
                    'navajowhite',
                    'navy',
                    'navyblue',
                    'oldlace',
                    'olive',
                    'olivedrab',
                    'orange',
                    'orangered',
                    'orchid',
                    'palegoldenrod',
                    'palegreen',
                    'paleturquoise',
                    'palevioletred',
                    'papayawhip',
                    'peachpuff',
                    'peru',
                    'pink',
                    'plum',
                    'powderblue',
                    'purple',
                    'red',
                    'rosybrown',
                    'royalblue',
                    'saddlebrown',
                    'salmon',
                    'sandybrown',
                    'seagreen',
                    'seashell',
                    'sienna',
                    'silver',
                    'skyblue',
                    'slateblue',
                    'slategray',
                    'slategrey',
                    'snow',
                    'springgreen',
                    'steelblue',
                    'tan',
                    'teal',
                    'thistle',
                    'tomato',
                    'turquoise',
                    'violet',
                    'wheat',
                    'white',
                    'whitesmoke',
                    'yellow',
                    'yellowgreen',
                  ],
                },
              },
            },
            hs_color: {
              name: 'Hue/Sat color',
              description:
                'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
              advanced: true,
              example: '[300, 70]',
              selector: {
                object: null,
              },
            },
            xy_color: {
              name: 'XY-color',
              description: 'Color for the light in XY-format.',
              advanced: true,
              example: '[0.52, 0.43]',
              selector: {
                object: null,
              },
            },
            color_temp: {
              name: 'Color temperature (mireds)',
              description: 'Color temperature for the light in mireds.',
              advanced: true,
              selector: {
                number: {
                  min: 153,
                  max: 500,
                  unit_of_measurement: 'mireds',
                },
              },
            },
            kelvin: {
              name: 'Color temperature (Kelvin)',
              description: 'Color temperature for the light in Kelvin.',
              advanced: true,
              selector: {
                number: {
                  min: 2000,
                  max: 6500,
                  step: 100,
                  unit_of_measurement: 'K',
                },
              },
            },
            white_value: {
              name: 'White level',
              description: 'Number indicating level of white.',
              advanced: true,
              selector: {
                number: {
                  min: 0,
                  max: 255,
                },
              },
            },
            brightness: {
              name: 'Brightness value',
              description:
                'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness and 255 is the maximum brightness supported by the light.',
              advanced: true,
              selector: {
                number: {
                  min: 0,
                  max: 255,
                },
              },
            },
            brightness_pct: {
              name: 'Brightness',
              description:
                'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness and 100 is the maximum brightness supported by the light.',
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
            profile: {
              name: 'Profile',
              description: 'Name of a light profile to use.',
              advanced: true,
              example: 'relax',
              selector: {
                text: null,
              },
            },
            flash: {
              name: 'Flash',
              description: 'If the light should flash.',
              advanced: true,
              selector: {
                select: {
                  options: ['long', 'short'],
                },
              },
            },
            effect: {
              name: 'Effect',
              description: 'Light effect.',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'light',
            },
          },
        },
      },
      automation: {
        trigger: {
          name: 'Trigger',
          description: 'Trigger the actions of an automation.',
          fields: {
            skip_condition: {
              name: 'Skip conditions',
              description: 'Whether or not the conditions will be skipped.',
              default: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'automation',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggle (enable / disable) an automation.',
          fields: {},
          target: {
            entity: {
              domain: 'automation',
            },
          },
        },
        turn_on: {
          name: 'Turn on',
          description: 'Enable an automation.',
          fields: {},
          target: {
            entity: {
              domain: 'automation',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Disable an automation.',
          fields: {
            stop_actions: {
              name: 'Stop actions',
              description: 'Stop currently running actions.',
              default: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'automation',
            },
          },
        },
        reload: {
          name: 'Reload',
          description: 'Reload the automation configuration.',
          fields: {},
        },
      },
      ping: {
        reload: {
          name: 'Reload',
          description: 'Reload all ping entities.',
          fields: {},
        },
      },
      template: {
        reload: {
          name: 'Reload',
          description: 'Reload all template entities.',
          fields: {},
        },
      },
      counter: {
        increment: {
          name: 'Increment',
          description: 'Increment a counter.',
          fields: {},
          target: {
            entity: {
              domain: 'counter',
            },
          },
        },
        decrement: {
          name: 'Decrement',
          description: 'Decrement a counter.',
          fields: {},
          target: {
            entity: {
              domain: 'counter',
            },
          },
        },
        reset: {
          name: 'Reset',
          description: 'Reset a counter.',
          fields: {},
          target: {
            entity: {
              domain: 'counter',
            },
          },
        },
        configure: {
          name: 'Configure',
          description: 'Change counter parameters.',
          fields: {
            minimum: {
              name: 'Minimum',
              description:
                'New minimum value for the counter or None to remove minimum.',
              selector: {
                number: {
                  min: -9223372036854776000,
                  max: 9223372036854776000,
                  mode: 'box',
                },
              },
            },
            maximum: {
              name: 'Maximum',
              description:
                'New maximum value for the counter or None to remove maximum.',
              selector: {
                number: {
                  min: -9223372036854776000,
                  max: 9223372036854776000,
                  mode: 'box',
                },
              },
            },
            step: {
              name: 'Step',
              description: 'New value for step.',
              selector: {
                number: {
                  min: 1,
                  max: 9223372036854776000,
                  mode: 'box',
                },
              },
            },
            initial: {
              name: 'Initial',
              description: 'New value for initial.',
              selector: {
                number: {
                  min: 0,
                  max: 9223372036854776000,
                  mode: 'box',
                },
              },
            },
            value: {
              name: 'Value',
              description: 'New state value.',
              selector: {
                number: {
                  min: 0,
                  max: 9223372036854776000,
                  mode: 'box',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'counter',
            },
          },
        },
      },
      timer: {
        reload: {
          name: '',
          description: '',
          fields: {},
        },
        start: {
          name: 'Start',
          description: 'Start a timer',
          fields: {
            duration: {
              description: 'Duration the timer requires to finish. [optional]',
              default: 0,
              example: '00:01:00 or 60',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'timer',
            },
          },
        },
        pause: {
          name: 'Pause',
          description: 'Pause a timer.',
          fields: {},
          target: {
            entity: {
              domain: 'timer',
            },
          },
        },
        cancel: {
          name: 'Cancel',
          description: 'Cancel a timer.',
          fields: {},
          target: {
            entity: {
              domain: 'timer',
            },
          },
        },
        finish: {
          name: 'Finish',
          description: 'Finish a timer.',
          fields: {},
          target: {
            entity: {
              domain: 'timer',
            },
          },
        },
      },
      input_text: {
        reload: {
          name: 'Reload',
          description: 'Reload the input_text configuration.',
          fields: {},
        },
        set_value: {
          name: 'Set',
          description: 'Set the value of an input text entity.',
          fields: {
            value: {
              name: 'Value',
              description: 'The target value the entity should be set to.',
              required: true,
              example: 'This is an example text',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'input_text',
            },
          },
        },
      },
      command_line: {
        reload: {
          name: 'Reload',
          description: 'Reload all command_line entities',
          fields: {},
        },
      },
      plex: {
        refresh_library: {
          name: 'Refresh library',
          description:
            'Refresh a Plex library to scan for new and updated media.',
          fields: {
            server_name: {
              name: 'Server name',
              description:
                'Name of a Plex server if multiple Plex servers configured.',
              example: 'My Plex Server',
              selector: {
                text: null,
              },
            },
            library_name: {
              name: 'Library name',
              description: 'Name of the Plex library to refresh.',
              required: true,
              example: 'TV Shows',
              selector: {
                text: null,
              },
            },
          },
        },
        scan_for_clients: {
          name: 'Scan for clients',
          description:
            'Scan for available clients from the Plex server(s), local network, and plex.tv.',
          fields: {},
        },
      },
      notify: {
        pushover_generic: {
          name: 'Send a notification with pushover_generic',
          description:
            'Sends a notification message using the pushover_generic service.',
          fields: {
            message: {
              name: 'Message',
              description: 'Message body of the notification.',
              required: true,
              example: 'The garage door has been open for 10 minutes.',
              selector: {
                text: null,
              },
            },
            title: {
              name: 'Title',
              description: 'Title for your notification.',
              example: 'Your Garage Door Friend',
              selector: {
                text: null,
              },
            },
            target: {
              name: 'Target',
              description:
                'An array of targets to send the notification to. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
            data: {
              name: 'Data',
              description:
                'Extended information for notification. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
          },
        },
        twitter_generic: {
          name: 'Send a notification with twitter_generic',
          description:
            'Sends a notification message using the twitter_generic service.',
          fields: {
            message: {
              name: 'Message',
              description: 'Message body of the notification.',
              required: true,
              example: 'The garage door has been open for 10 minutes.',
              selector: {
                text: null,
              },
            },
            title: {
              name: 'Title',
              description: 'Title for your notification.',
              example: 'Your Garage Door Friend',
              selector: {
                text: null,
              },
            },
            target: {
              name: 'Target',
              description:
                'An array of targets to send the notification to. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
            data: {
              name: 'Data',
              description:
                'Extended information for notification. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
          },
        },
        persistent_notification: {
          name: 'Send a persistent notification',
          description: 'Sends a notification to the visible in the front-end.',
          fields: {
            message: {
              name: 'Message',
              description: 'Message body of the notification.',
              required: true,
              example: 'The garage door has been open for 10 minutes.',
              selector: {
                text: null,
              },
            },
            title: {
              name: 'Title',
              description: 'Title for your notification.',
              example: 'Your Garage Door Friend',
              selector: {
                text: null,
              },
            },
          },
        },
        mobile_app_avery_iphone: {
          name: 'Send a notification via mobile_app_avery_iphone',
          description:
            'Sends a notification message using the mobile_app_avery_iphone integration.',
          fields: {
            message: {
              name: 'Message',
              description: 'Message body of the notification.',
              required: true,
              example: 'The garage door has been open for 10 minutes.',
              selector: {
                text: null,
              },
            },
            title: {
              name: 'Title',
              description: 'Title for your notification.',
              example: 'Your Garage Door Friend',
              selector: {
                text: null,
              },
            },
            target: {
              name: 'Target',
              description:
                'An array of targets to send the notification to. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
            data: {
              name: 'Data',
              description:
                'Extended information for notification. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
          },
        },
        notify: {
          name: 'Send a notification with notify',
          description: 'Sends a notification message using the notify service.',
          fields: {
            message: {
              name: 'Message',
              description: 'Message body of the notification.',
              required: true,
              example: 'The garage door has been open for 10 minutes.',
              selector: {
                text: null,
              },
            },
            title: {
              name: 'Title',
              description: 'Title for your notification.',
              example: 'Your Garage Door Friend',
              selector: {
                text: null,
              },
            },
            target: {
              name: 'Target',
              description:
                'An array of targets to send the notification to. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
            data: {
              name: 'Data',
              description:
                'Extended information for notification. Optional depending on the platform.',
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
          },
        },
      },
      zone: {
        reload: {
          name: 'Reload',
          description: 'Reload the YAML-based zone configuration.',
          fields: {},
        },
      },
      input_number: {
        reload: {
          name: 'Reload',
          description: 'Reload the input_number configuration.',
          fields: {},
        },
        set_value: {
          name: 'Set',
          description: 'Set the value of an input number entity.',
          fields: {
            value: {
              name: 'Value',
              description: 'The target value the entity should be set to.',
              required: true,
              selector: {
                number: {
                  min: 0,
                  max: 9223372036854776000,
                  step: 0.001,
                  mode: 'box',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'input_number',
            },
          },
        },
        increment: {
          name: 'Increment',
          description:
            'Increment the value of an input number entity by its stepping.',
          fields: {},
          target: {
            entity: {
              domain: 'input_number',
            },
          },
        },
        decrement: {
          name: 'Decrement',
          description:
            'Decrement the value of an input number entity by its stepping.',
          fields: {},
          target: {
            entity: {
              domain: 'input_number',
            },
          },
        },
      },
      input_datetime: {
        reload: {
          name: 'Reload',
          description: 'Reload the input_datetime configuration.',
          fields: {},
        },
        set_datetime: {
          name: 'Set',
          description:
            'This can be used to dynamically set the date and/or time.',
          fields: {
            date: {
              name: 'Date',
              description: 'The target date the entity should be set to.',
              example: '"2019-04-20"',
              selector: {
                text: null,
              },
            },
            time: {
              name: 'Time',
              description: 'The target time the entity should be set to.',
              example: '"05:04:20"',
              selector: {
                time: null,
              },
            },
            datetime: {
              name: 'Date & Time',
              description:
                'The target date & time the entity should be set to.',
              example: '"2019-04-20 05:04:20"',
              selector: {
                text: null,
              },
            },
            timestamp: {
              name: 'Timestamp',
              description:
                'The target date & time the entity should be set to as expressed by a UNIX timestamp.',
              selector: {
                number: {
                  min: 0,
                  max: 9223372036854776000,
                  mode: 'box',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'input_datetime',
            },
          },
        },
      },
      input_select: {
        reload: {
          name: 'Reload',
          description: 'Reload the input_select configuration.',
          fields: {},
        },
        select_option: {
          name: 'Select',
          description: 'Select an option of an input select entity.',
          fields: {
            option: {
              name: 'Option',
              description: 'Option to be selected.',
              required: true,
              example: '"Item A"',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'input_select',
            },
          },
        },
        select_next: {
          name: 'Next',
          description: 'Select the next options of an input select entity.',
          fields: {
            cycle: {
              name: 'Cycle',
              description:
                'If the option should cycle from the last to the first.',
              default: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'input_select',
            },
          },
        },
        select_previous: {
          name: 'Previous',
          description: 'Select the previous options of an input select entity.',
          fields: {
            cycle: {
              name: 'Cycle',
              description:
                'If the option should cycle from the first to the last.',
              default: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'input_select',
            },
          },
        },
        select_first: {
          name: 'First',
          description: 'Select the first option of an input select entity.',
          fields: {},
          target: {
            entity: {
              domain: 'input_select',
            },
          },
        },
        select_last: {
          name: 'Last',
          description: 'Select the last option of an input select entity.',
          fields: {},
          target: {
            entity: {
              domain: 'input_select',
            },
          },
        },
        set_options: {
          name: 'Set options',
          description: 'Set the options of an input select entity.',
          fields: {
            options: {
              name: 'Options',
              description: 'Options for the input select entity.',
              required: true,
              example: '["Item A", "Item B", "Item C"]',
              selector: {
                object: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'input_select',
            },
          },
        },
      },
      camera: {
        enable_motion_detection: {
          name: 'Enable motion detection',
          description: 'Enable the motion detection in a camera.',
          fields: {},
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
        disable_motion_detection: {
          name: 'Disable motion detection',
          description: 'Disable the motion detection in a camera.',
          fields: {},
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turn off camera.',
          fields: {},
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
        turn_on: {
          name: 'Turn on',
          description: 'Turn on camera.',
          fields: {},
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
        snapshot: {
          name: 'Take snapshot',
          description: 'Take a snapshot from a camera.',
          fields: {
            filename: {
              name: 'Filename',
              description: 'Template of a Filename. Variable is entity_id.',
              required: true,
              example: '/tmp/snapshot_{{ entity_id.name }}.jpg',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
        play_stream: {
          name: 'Play stream',
          description: 'Play camera stream on supported media player.',
          fields: {
            media_player: {
              name: 'Media Player',
              description: 'Name(s) of media player to stream to.',
              required: true,
              selector: {
                entity: {
                  domain: 'media_player',
                },
              },
            },
            format: {
              name: 'Format',
              description: 'Stream format supported by media player.',
              default: 'hls',
              selector: {
                select: {
                  options: ['hls'],
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
        record: {
          name: 'Record',
          description: 'Record live camera feed.',
          fields: {
            filename: {
              name: 'Filename',
              description:
                'Template of a Filename. Variable is entity_id. Must be mp4.',
              required: true,
              example: '/tmp/snapshot_{{ entity_id.name }}.mp4',
              selector: {
                text: null,
              },
            },
            duration: {
              name: 'Duration',
              description: 'Target recording length.',
              default: 30,
              selector: {
                number: {
                  min: 1,
                  max: 3600,
                  unit_of_measurement: 'seconds',
                },
              },
            },
            lookback: {
              name: 'Lookback',
              description:
                'Target lookback period to include in addition to duration. Only available if there is currently an active HLS stream.',
              default: 0,
              selector: {
                number: {
                  min: 0,
                  max: 300,
                  unit_of_measurement: 'seconds',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'camera',
            },
          },
        },
      },
      input_boolean: {
        reload: {
          name: 'Reload',
          description: 'Reload the input_boolean configuration',
          fields: {},
        },
        turn_on: {
          name: 'Turn on',
          description: 'Turn on an input boolean',
          fields: {},
          target: {
            entity: {
              domain: 'input_boolean',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turn off an input boolean',
          fields: {},
          target: {
            entity: {
              domain: 'input_boolean',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggle an input boolean',
          fields: {},
          target: {
            entity: {
              domain: 'input_boolean',
            },
          },
        },
      },
      homekit: {
        reset_accessory: {
          name: 'Reset accessory',
          description: 'Reset a HomeKit accessory',
          fields: {},
          target: {
            entity: {},
          },
        },
        unpair: {
          name: 'Unpair an accessory or bridge',
          description:
            'Forcefully remove all pairings from an accessory to allow re-pairing. Use this service if the accessory is no longer responsive, and you want to avoid deleting and re-adding the entry. Room locations, and accessory preferences will be lost.',
          fields: {},
          target: {
            device: {
              integration: 'homekit',
            },
          },
        },
        start: {
          name: 'Start',
          description: 'Starts the HomeKit driver',
          fields: {},
        },
        reload: {
          name: 'Reload',
          description: 'Reload homekit and re-process YAML configuration',
          fields: {},
        },
      },
      tts: {
        google_translate_say: {
          name: 'Say an TTS message with google_translate',
          description:
            'Say something using text-to-speech on a media player with google_translate.',
          fields: {
            entity_id: {
              name: 'Entity',
              description: 'Name(s) of media player entities.',
              required: true,
              selector: {
                entity: {
                  domain: 'media_player',
                },
              },
            },
            message: {
              name: 'Message',
              description: 'Text to speak on devices.',
              example: 'My name is hanna',
              required: true,
              selector: {
                text: null,
              },
            },
            cache: {
              name: 'Cache',
              description: 'Control file cache of this message.',
              default: false,
              selector: {
                boolean: null,
              },
            },
            language: {
              name: 'Language',
              description: 'Language to use for speech generation.',
              example: 'ru',
              selector: {
                text: null,
              },
            },
            options: {
              name: 'Options',
              description:
                'A dictionary containing platform-specific options. Optional depending on the platform.',
              advanced: true,
              example: 'platform specific',
              selector: {
                object: null,
              },
            },
          },
        },
        clear_cache: {
          name: 'Clear TTS cache',
          description: 'Remove all text-to-speech cache files and RAM cache.',
          fields: {},
        },
      },
      script: {
        '1642401425928': {
          name: 'New Script',
          description: '',
          fields: {},
        },
        toggle_mute: {
          name: 'Toggle media_player mute',
          description: '',
          fields: {
            entity_id: {
              description: 'Entity id of the media_player',
              example: 'media_player.media_room',
              advanced: false,
              required: false,
            },
          },
        },
        reload: {
          name: 'Reload',
          description: 'Reload all the available scripts',
          fields: {},
        },
        turn_on: {
          name: 'Turn on',
          description: 'Turn on script',
          fields: {},
          target: {
            entity: {
              domain: 'script',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turn off script',
          fields: {},
          target: {
            entity: {
              domain: 'script',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggle script',
          fields: {},
          target: {
            entity: {
              domain: 'script',
            },
          },
        },
      },
      device_tracker: {
        see: {
          name: 'See',
          description: 'Control tracked device.',
          fields: {
            mac: {
              name: 'MAC address',
              description: 'MAC address of device',
              example: 'FF:FF:FF:FF:FF:FF',
              selector: {
                text: null,
              },
            },
            dev_id: {
              name: 'Device ID',
              description: 'Id of device (find id in known_devices.yaml).',
              example: 'phonedave',
              selector: {
                text: null,
              },
            },
            host_name: {
              name: 'Host name',
              description: 'Hostname of device',
              example: 'Dave',
              selector: {
                text: null,
              },
            },
            location_name: {
              name: 'Location name',
              description:
                'Name of location where device is located (not_home is away).',
              example: 'home',
              selector: {
                text: null,
              },
            },
            gps: {
              name: 'GPS coordinates',
              description:
                'GPS coordinates where device is located (latitude, longitude).',
              example: '[51.509802, -0.086692]',
              selector: {
                object: null,
              },
            },
            gps_accuracy: {
              name: 'GPS accuracy',
              description: 'Accuracy of GPS coordinates.',
              selector: {
                number: {
                  min: 1,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
            battery: {
              name: 'Battery level',
              description: 'Battery level of device.',
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
          },
        },
      },
      zha: {
        permit: {
          name: 'Permit',
          description: 'Allow nodes to join the Zigbee network.',
          fields: {
            duration: {
              name: 'Duration',
              description: 'Time to permit joins, in seconds',
              default: 60,
              selector: {
                number: {
                  min: 0,
                  max: 254,
                  unit_of_measurement: 'seconds',
                },
              },
            },
            ieee: {
              name: 'IEEE',
              description: 'IEEE address of the node permitting new joins',
              example: '00:0d:6f:00:05:7d:2d:34',
              selector: {
                text: null,
              },
            },
            source_ieee: {
              name: 'Source IEEE',
              description:
                'IEEE address of the joining device (must be used with install code)',
              example: '00:0a:bf:00:01:10:23:35',
              selector: {
                text: null,
              },
            },
            install_code: {
              name: 'Install Code',
              description:
                'Install code of the joining device (must be used with source_ieee)',
              example: '1234-5678-1234-5678-AABB-CCDD-AABB-CCDD-EEFF',
              selector: {
                text: null,
              },
            },
            qr_code: {
              name: 'QR Code',
              description:
                'value of the QR install code (different between vendors)',
              example:
                'Z:000D6FFFFED4163B$I:52797BF4A5084DAA8E1712B61741CA024051',
              selector: {
                text: null,
              },
            },
          },
        },
        remove: {
          name: 'Remove',
          description: 'Remove a node from the Zigbee network.',
          fields: {
            ieee: {
              name: 'IEEE',
              description: 'IEEE address of the node to remove',
              required: true,
              example: '00:0d:6f:00:05:7d:2d:34',
              selector: {
                text: null,
              },
            },
          },
        },
        set_zigbee_cluster_attribute: {
          name: 'Set zigbee cluster attribute',
          description:
            'Set attribute value for the specified cluster on the specified entity.',
          fields: {
            ieee: {
              name: 'IEEE',
              description: 'IEEE address for the device',
              required: true,
              example: '00:0d:6f:00:05:7d:2d:34',
              selector: {
                text: null,
              },
            },
            endpoint_id: {
              name: 'Endpoint ID',
              description: 'Endpoint id for the cluster',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                  mode: 'box',
                },
              },
            },
            cluster_id: {
              name: 'Cluster ID',
              description: 'ZCL cluster to retrieve attributes for',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            cluster_type: {
              name: 'Cluster Type',
              description: 'type of the cluster',
              default: 'in',
              selector: {
                select: {
                  options: ['in', 'out'],
                },
              },
            },
            attribute: {
              name: 'Attribute',
              description: 'id of the attribute to set',
              required: true,
              example: 0,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            value: {
              name: 'Value',
              description: 'value to write to the attribute',
              required: true,
              example: 1,
              selector: {
                text: null,
              },
            },
            manufacturer: {
              name: 'Manufacturer',
              description: 'manufacturer code',
              example: 252,
              selector: {
                text: null,
              },
            },
          },
        },
        issue_zigbee_cluster_command: {
          name: 'Issue zigbee cluster command',
          description:
            'Issue command on the specified cluster on the specified entity.',
          fields: {
            ieee: {
              name: 'IEEE',
              description: 'IEEE address for the device',
              required: true,
              example: '00:0d:6f:00:05:7d:2d:34',
              selector: {
                text: null,
              },
            },
            endpoint_id: {
              name: 'Endpoint ID',
              description: 'Endpoint id for the cluster',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            cluster_id: {
              name: 'Cluster ID',
              description: 'ZCL cluster to retrieve attributes for',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            cluster_type: {
              name: 'Cluster Type',
              description: 'type of the cluster',
              default: 'in',
              selector: {
                select: {
                  options: ['in', 'out'],
                },
              },
            },
            command: {
              name: 'Command',
              description: 'id of the command to execute',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            command_type: {
              name: 'Command Type',
              description: 'type of the command to execute',
              required: true,
              selector: {
                select: {
                  options: ['client', 'server'],
                },
              },
            },
            args: {
              name: 'Args',
              description: 'args to pass to the command',
              example: '[arg1, arg2, argN]',
              selector: {
                object: null,
              },
            },
            manufacturer: {
              name: 'Manufacturer',
              description: 'manufacturer code',
              example: 252,
              selector: {
                text: null,
              },
            },
          },
        },
        issue_zigbee_group_command: {
          name: 'Issue zigbee group command',
          description:
            'Issue command on the specified cluster on the specified group.',
          fields: {
            group: {
              name: 'Group',
              description: 'Hexadecimal address of the group',
              required: true,
              example: 546,
              selector: {
                text: null,
              },
            },
            cluster_id: {
              name: 'Cluster ID',
              description: 'ZCL cluster to send command to',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            cluster_type: {
              name: 'Cluster Type',
              description: 'type of the cluster',
              default: 'in',
              selector: {
                select: {
                  options: ['in', 'out'],
                },
              },
            },
            command: {
              name: 'Command',
              description: 'id of the command to execute',
              required: true,
              selector: {
                number: {
                  min: 1,
                  max: 65535,
                },
              },
            },
            args: {
              name: 'Args',
              description: 'args to pass to the command',
              example: '[arg1, arg2, argN]',
              selector: {
                object: null,
              },
            },
            manufacturer: {
              name: 'Manufacturer',
              description: 'manufacturer code',
              example: 252,
              selector: {
                text: null,
              },
            },
          },
        },
        warning_device_squawk: {
          name: 'Warning device squawk',
          description:
            'This service uses the WD capabilities to emit a quick audible/visible pulse called a "squawk". The squawk command has no effect if the WD is currently active (warning in progress).',
          fields: {
            ieee: {
              name: 'IEEE',
              description: 'IEEE address for the device',
              required: true,
              example: '00:0d:6f:00:05:7d:2d:34',
              selector: {
                text: null,
              },
            },
            mode: {
              name: 'Mode',
              description:
                'The Squawk Mode field is used as a 4-bit enumeration, and can have one of the values shown in Table 8-24 of the ZCL spec - Squawk Mode Field. The exact operation of each mode (how the WD “squawks”) is implementation specific.',
              default: 0,
              selector: {
                number: {
                  min: 0,
                  max: 1,
                  mode: 'box',
                },
              },
            },
            strobe: {
              name: 'Strobe',
              description:
                'The strobe field is used as a Boolean, and determines if the visual indication is also required in addition to the audible squawk, as shown in Table 8-25 of the ZCL spec - Strobe Bit.',
              default: 1,
              selector: {
                number: {
                  min: 0,
                  max: 1,
                  mode: 'box',
                },
              },
            },
            level: {
              name: 'Level',
              description:
                'The squawk level field is used as a 2-bit enumeration, and determines the intensity of audible squawk sound as shown in Table 8-26 of the ZCL spec - Squawk Level Field Values.',
              default: 2,
              selector: {
                number: {
                  min: 0,
                  max: 3,
                  mode: 'box',
                },
              },
            },
          },
        },
        warning_device_warn: {
          name: 'Warning device warn',
          description:
            'This service starts the WD operation. The WD alerts the surrounding area by audible (siren) and visual (strobe) signals.',
          fields: {
            ieee: {
              name: 'IEEE',
              description: 'IEEE address for the device',
              required: true,
              example: '00:0d:6f:00:05:7d:2d:34',
              selector: {
                text: null,
              },
            },
            mode: {
              name: 'Mode',
              description:
                'The Warning Mode field is used as an 4-bit enumeration, can have one of the values 0-6 defined below in table 8-20 of the ZCL spec. The exact behavior of the WD device in each mode is according to the relevant security standards.',
              default: 3,
              selector: {
                number: {
                  min: 0,
                  max: 6,
                  mode: 'box',
                },
              },
            },
            strobe: {
              name: 'Strobe',
              description:
                'The Strobe field is used as a 2-bit enumeration, and determines if the visual indication is required in addition to the audible siren, as indicated in Table 8-21 of the ZCL spec. "0" means no strobe, "1" means strobe. If the strobe field is “1” and the Warning Mode is “0” (“Stop”) then only the strobe is activated.',
              default: 1,
              selector: {
                number: {
                  min: 0,
                  max: 1,
                  mode: 'box',
                },
              },
            },
            level: {
              name: 'Level',
              description:
                'The Siren Level field is used as a 2-bit enumeration, and indicates the intensity of audible squawk sound as shown in Table 8-22 of the ZCL spec.',
              default: 2,
              selector: {
                number: {
                  min: 0,
                  max: 3,
                  mode: 'box',
                },
              },
            },
            duration: {
              name: 'Duration',
              description:
                'Requested duration of warning, in seconds (16 bit). If both Strobe and Warning Mode are "0" this field SHALL be ignored.',
              default: 5,
              selector: {
                number: {
                  min: 0,
                  max: 65535,
                  unit_of_measurement: 'seconds',
                },
              },
            },
            duty_cycle: {
              name: 'Duty cycle',
              description:
                'Indicates the length of the flash cycle. This provides a means of varying the flash duration for different alarm types (e.g., fire, police, burglar). Valid range is 0-100 in increments of 10. All other values SHALL be rounded to the nearest valid value. Strobe SHALL calculate duty cycle over a duration of one second. The ON state SHALL precede the OFF state. For example, if Strobe Duty Cycle Field specifies “40,” then the strobe SHALL flash ON for 4/10ths of a second and then turn OFF for 6/10ths of a second.',
              default: 0,
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  step: 10,
                },
              },
            },
            intensity: {
              name: 'Intensity',
              description:
                'Indicates the intensity of the strobe as shown in Table 8-23 of the ZCL spec. This attribute is designed to vary the output of the strobe (i.e., brightness) and not its frequency, which is detailed in section 8.4.2.3.1.6 of the ZCL spec.',
              default: 2,
              selector: {
                number: {
                  min: 0,
                  max: 3,
                  mode: 'box',
                },
              },
            },
          },
        },
        set_lock_user_code: {
          name: 'Set lock user code',
          description: 'Set a user code on a lock',
          fields: {
            code_slot: {
              name: 'Code slot',
              description: 'Code slot to set the code in',
              required: true,
              example: 1,
              selector: {
                text: null,
              },
            },
            user_code: {
              name: 'Code',
              description: 'Code to set',
              required: true,
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
              integration: 'zha',
            },
          },
        },
        enable_lock_user_code: {
          name: 'Enable lock user',
          description: 'Enable a user code on a lock',
          fields: {
            code_slot: {
              name: 'Code slot',
              description: 'Code slot to enable',
              required: true,
              example: 1,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
              integration: 'zha',
            },
          },
        },
        disable_lock_user_code: {
          name: 'Disable lock user',
          description: 'Disable a user code on a lock',
          fields: {
            code_slot: {
              name: 'Code slot',
              description: 'Code slot to disable',
              required: true,
              example: 1,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
              integration: 'zha',
            },
          },
        },
        clear_lock_user_code: {
          name: 'Clear lock user',
          description: 'Clear a user code from a lock',
          fields: {
            code_slot: {
              name: 'Code slot',
              description: 'Code slot to clear code from',
              required: true,
              example: 1,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
              integration: 'zha',
            },
          },
        },
      },
      alarm_control_panel: {
        alarm_disarm: {
          name: 'Disarm',
          description: 'Send the alarm the command for disarm.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to disarm the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
        alarm_arm_home: {
          name: 'Arm home',
          description: 'Send the alarm the command for arm home.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to arm home the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
        alarm_arm_away: {
          name: 'Arm away',
          description: 'Send the alarm the command for arm away.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to arm away the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
        alarm_arm_night: {
          name: 'Arm night',
          description: 'Send the alarm the command for arm night.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to arm night the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
        alarm_arm_vacation: {
          name: 'Arm vacation',
          description: 'Send the alarm the command for arm vacation.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to arm vacation the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
        alarm_arm_custom_bypass: {
          name: 'Arm with custom bypass',
          description: 'Send arm custom bypass command.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to arm custom bypass the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
        alarm_trigger: {
          name: 'Trigger',
          description: 'Send the alarm the command for trigger.',
          fields: {
            code: {
              name: 'Code',
              description:
                'An optional code to trigger the alarm control panel with.',
              example: '1234',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'alarm_control_panel',
            },
          },
        },
      },
      climate: {
        turn_on: {
          name: 'Turn on',
          description: 'Turn climate device on.',
          fields: {},
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turn climate device off.',
          fields: {},
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_hvac_mode: {
          name: 'Set HVAC mode',
          description: 'Set HVAC operation mode for climate device.',
          fields: {
            hvac_mode: {
              name: 'HVAC mode',
              description: 'New value of operation mode.',
              selector: {
                select: {
                  options: [
                    'off',
                    'auto',
                    'cool',
                    'dry',
                    'fan_only',
                    'heat_cool',
                    'heat',
                  ],
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_preset_mode: {
          name: 'Set preset mode',
          description: 'Set preset mode for climate device.',
          fields: {
            preset_mode: {
              name: 'Preset mode',
              description: 'New value of preset mode.',
              required: true,
              example: 'away',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_aux_heat: {
          name: 'Turn on/off auxiliary heater',
          description: 'Turn auxiliary heater on/off for climate device.',
          fields: {
            aux_heat: {
              name: 'Auxiliary heating',
              description: 'New value of auxiliary heater.',
              required: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_temperature: {
          name: 'Set temperature',
          description: 'Set target temperature of climate device.',
          fields: {
            temperature: {
              name: 'Temperature',
              description: 'New target temperature for HVAC.',
              selector: {
                number: {
                  min: 0,
                  max: 250,
                  step: 0.1,
                  mode: 'box',
                },
              },
            },
            target_temp_high: {
              name: 'Target temperature high',
              description: 'New target high temperature for HVAC.',
              advanced: true,
              selector: {
                number: {
                  min: 0,
                  max: 250,
                  step: 0.1,
                  mode: 'box',
                },
              },
            },
            target_temp_low: {
              name: 'Target temperature low',
              description: 'New target low temperature for HVAC.',
              advanced: true,
              selector: {
                number: {
                  min: 0,
                  max: 250,
                  step: 0.1,
                  mode: 'box',
                },
              },
            },
            hvac_mode: {
              name: 'HVAC mode',
              description: 'HVAC operation mode to set temperature to.',
              selector: {
                select: {
                  options: [
                    'off',
                    'auto',
                    'cool',
                    'dry',
                    'fan_only',
                    'heat_cool',
                    'heat',
                  ],
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_humidity: {
          name: 'Set target humidity',
          description: 'Set target humidity of climate device.',
          fields: {
            humidity: {
              name: 'Humidity',
              description: 'New target humidity for climate device.',
              required: true,
              selector: {
                number: {
                  min: 30,
                  max: 99,
                  unit_of_measurement: '%',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_fan_mode: {
          name: 'Set fan mode',
          description: 'Set fan operation for climate device.',
          fields: {
            fan_mode: {
              name: 'Fan mode',
              description: 'New value of fan mode.',
              required: true,
              example: 'low',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
        set_swing_mode: {
          name: 'Set swing mode',
          description: 'Set swing operation for climate device.',
          fields: {
            swing_mode: {
              name: 'Swing mode',
              description: 'New value of swing mode.',
              required: true,
              example: 'horizontal',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'climate',
            },
          },
        },
      },
      number: {
        set_value: {
          name: 'Set',
          description: 'Set the value of a Number entity.',
          fields: {
            value: {
              name: 'Value',
              description: 'The target value the entity should be set to.',
              example: 42,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'number',
            },
          },
        },
      },
      siren: {
        turn_on: {
          name: '',
          description: 'Turn siren on.',
          fields: {
            tone: {
              description:
                'The tone to emit when turning the siren on. When `available_tones` property is a map, either the key or the value can be used. Must be supported by the integration.',
              example: 'fire',
              required: false,
              selector: {
                text: null,
              },
            },
            volume_level: {
              description:
                'The volume level of the noise to emit when turning the siren on. Must be supported by the integration.',
              example: 0.5,
              required: false,
              selector: {
                number: {
                  min: 0,
                  max: 1,
                  step: 0.05,
                },
              },
            },
            duration: {
              description:
                'The duration in seconds of the noise to emit when turning the siren on. Must be supported by the integration.',
              example: 15,
              required: false,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'siren',
            },
          },
        },
        turn_off: {
          name: '',
          description: 'Turn siren off.',
          fields: {},
          target: {
            entity: {
              domain: 'siren',
            },
          },
        },
        toggle: {
          name: '',
          description: 'Toggles a siren.',
          fields: {},
          target: {
            entity: {
              domain: 'siren',
            },
          },
        },
      },
      fan: {
        turn_on: {
          name: 'Turn on',
          description: 'Turn fan on.',
          fields: {
            speed: {
              name: 'Speed',
              description: 'Speed setting.',
              example: 'high',
              selector: {
                text: null,
              },
            },
            percentage: {
              name: 'Percentage',
              description: 'Percentage speed setting.',
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
            preset_mode: {
              name: 'Preset mode',
              description: 'Preset mode setting.',
              example: 'auto',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        turn_off: {
          name: 'Turn off',
          description: 'Turn fan off.',
          fields: {},
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggle the fan on/off.',
          fields: {},
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        set_speed: {
          name: 'Set speed',
          description: 'Set fan speed.',
          fields: {
            speed: {
              name: 'Speed',
              description: 'Speed setting.',
              required: true,
              example: 'low',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        increase_speed: {
          name: 'Increase speed',
          description:
            'Increase the speed of the fan by one speed or a percentage_step.',
          fields: {
            percentage_step: {
              advanced: true,
              required: false,
              description: 'Increase speed by a percentage.',
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        decrease_speed: {
          name: 'Decrease speed',
          description:
            'Decrease the speed of the fan by one speed or a percentage_step.',
          fields: {
            percentage_step: {
              advanced: true,
              required: false,
              description: 'Decrease speed by a percentage.',
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        oscillate: {
          name: 'Oscillate',
          description: 'Oscillate the fan.',
          fields: {
            oscillating: {
              name: 'Oscillating',
              description: 'Flag to turn on/off oscillation.',
              required: true,
              selector: {
                boolean: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        set_direction: {
          name: 'Set direction',
          description: 'Set the fan rotation.',
          fields: {
            direction: {
              name: 'Direction',
              description: 'The direction to rotate.',
              required: true,
              selector: {
                select: {
                  options: ['forward', 'reverse'],
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        set_percentage: {
          name: 'Set speed percentage',
          description: 'Set fan speed percentage.',
          fields: {
            percentage: {
              name: 'Percentage',
              description: 'Percentage speed setting.',
              required: true,
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
        set_preset_mode: {
          name: 'Set preset mode',
          description: 'Set preset mode for a fan device.',
          fields: {
            preset_mode: {
              name: 'Preset mode',
              description: 'New value of preset mode.',
              required: true,
              example: 'auto',
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'fan',
            },
          },
        },
      },
      lock: {
        unlock: {
          name: 'Unlock',
          description: 'Unlock all or specified locks.',
          fields: {
            code: {
              name: 'Code',
              description: 'An optional code to unlock the lock with.',
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
            },
          },
        },
        lock: {
          name: 'Lock',
          description: 'Lock all or specified locks.',
          fields: {
            code: {
              name: 'Code',
              description: 'An optional code to lock the lock with.',
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
            },
          },
        },
        open: {
          name: 'Open',
          description: 'Open all or specified locks.',
          fields: {
            code: {
              name: 'Code',
              description: 'An optional code to open the lock with.',
              example: 1234,
              selector: {
                text: null,
              },
            },
          },
          target: {
            entity: {
              domain: 'lock',
            },
          },
        },
      },
      cover: {
        open_cover: {
          name: 'Open',
          description: 'Open all or specified cover.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        close_cover: {
          name: 'Close',
          description: 'Close all or specified cover.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        set_cover_position: {
          name: 'Set position',
          description: 'Move to specific position all or specified cover.',
          fields: {
            position: {
              name: 'Position',
              description: 'Position of the cover',
              required: true,
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        stop_cover: {
          name: 'Stop',
          description: 'Stop all or specified cover.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggle a cover open/closed.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        open_cover_tilt: {
          name: 'Open tilt',
          description: 'Open all or specified cover tilt.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        close_cover_tilt: {
          name: 'Close tilt',
          description: 'Close all or specified cover tilt.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        stop_cover_tilt: {
          name: 'Stop tilt',
          description: 'Stop all or specified cover.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        set_cover_tilt_position: {
          name: 'Set tilt position',
          description: 'Move to specific position all or specified cover tilt.',
          fields: {
            tilt_position: {
              name: 'Tilt position',
              description: 'Tilt position of the cover.',
              required: true,
              selector: {
                number: {
                  min: 0,
                  max: 100,
                  unit_of_measurement: '%',
                },
              },
            },
          },
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
        toggle_cover_tilt: {
          name: 'Toggle tilt',
          description: 'Toggle a cover tilt open/closed.',
          fields: {},
          target: {
            entity: {
              domain: 'cover',
            },
          },
        },
      },
      switch: {
        turn_off: {
          name: 'Turn off',
          description: 'Turn a switch off',
          fields: {},
          target: {
            entity: {
              domain: 'switch',
            },
          },
        },
        turn_on: {
          name: 'Turn on',
          description: 'Turn a switch on',
          fields: {},
          target: {
            entity: {
              domain: 'switch',
            },
          },
        },
        toggle: {
          name: 'Toggle',
          description: 'Toggles a switch state',
          fields: {},
          target: {
            entity: {
              domain: 'switch',
            },
          },
        },
      },
    },
    user: {
      id: '05851259f2cb49e78aa16131021fb95a',
      name: 'admin',
      is_owner: true,
      is_admin: true,
      credentials: [
        {
          auth_provider_type: 'homeassistant',
          auth_provider_id: null,
        },
      ],
      mfa_modules: [
        {
          id: 'totp',
          name: 'Authenticator app',
          enabled: false,
        },
      ],
    },
    panelUrl: 'lovelace',
    defaultPanel: 'lovelace',
    language: 'en',
    selectedLanguage: null,
    locale: {
      language: 'en',
      number_format: 'language',
      time_format: 'language',
    },
    resources: {
      en: {
        'panel.energy': 'Energy',
        'panel.calendar': 'Calendar',
        'panel.config': 'Configuration',
        'panel.states': 'Overview',
        'panel.map': 'Map',
        'panel.logbook': 'Logbook',
        'panel.history': 'History',
        'panel.mailbox': 'Mailbox',
        'panel.shopping_list': 'Shopping List',
        'panel.developer_tools': 'Developer Tools',
        'panel.media_browser': 'Media Browser',
        'panel.profile': 'Profile',
        'state.default.on': 'On',
        'state.default.off': 'Off',
        'state.default.unknown': 'Unknown',
        'state.default.unavailable': 'Unavailable',
        'state_attributes.climate.fan_mode.off': 'Off',
        'state_attributes.climate.fan_mode.on': 'On',
        'state_attributes.climate.fan_mode.auto': 'Auto',
        'state_attributes.climate.preset_mode.none': 'None',
        'state_attributes.climate.preset_mode.eco': 'Eco',
        'state_attributes.climate.preset_mode.away': 'Away',
        'state_attributes.climate.preset_mode.boost': 'Boost',
        'state_attributes.climate.preset_mode.comfort': 'Comfort',
        'state_attributes.climate.preset_mode.home': 'Home',
        'state_attributes.climate.preset_mode.sleep': 'Sleep',
        'state_attributes.climate.preset_mode.activity': 'Activity',
        'state_attributes.climate.hvac_action.off': 'Off',
        'state_attributes.climate.hvac_action.heating': 'Heating',
        'state_attributes.climate.hvac_action.cooling': 'Cooling',
        'state_attributes.climate.hvac_action.drying': 'Drying',
        'state_attributes.climate.hvac_action.idle': 'Idle',
        'state_attributes.climate.hvac_action.fan': 'Fan',
        'state_attributes.humidifier.mode.normal': 'Normal',
        'state_attributes.humidifier.mode.eco': 'Eco',
        'state_attributes.humidifier.mode.away': 'Away',
        'state_attributes.humidifier.mode.boost': 'Boost',
        'state_attributes.humidifier.mode.comfort': 'Comfort',
        'state_attributes.humidifier.mode.home': 'Home',
        'state_attributes.humidifier.mode.sleep': 'Sleep',
        'state_attributes.humidifier.mode.auto': 'Auto',
        'state_attributes.humidifier.mode.baby': 'Baby',
        'state_badge.default.unknown': 'Unk',
        'state_badge.default.unavailable': 'Unavai',
        'state_badge.default.error': 'Error',
        'state_badge.default.entity_not_found': 'Entity not found',
        'state_badge.alarm_control_panel.armed': 'Armed',
        'state_badge.alarm_control_panel.disarmed': 'Disarm',
        'state_badge.alarm_control_panel.armed_home': 'Armed',
        'state_badge.alarm_control_panel.armed_away': 'Armed',
        'state_badge.alarm_control_panel.armed_night': 'Armed',
        'state_badge.alarm_control_panel.armed_vacation': 'Armed',
        'state_badge.alarm_control_panel.armed_custom_bypass': 'Armed',
        'state_badge.alarm_control_panel.pending': 'Pend',
        'state_badge.alarm_control_panel.arming': 'Arming',
        'state_badge.alarm_control_panel.disarming': 'Disarm',
        'state_badge.alarm_control_panel.triggered': 'Trig',
        'state_badge.device_tracker.home': 'Home',
        'state_badge.device_tracker.not_home': 'Away',
        'state_badge.person.home': 'Home',
        'state_badge.person.not_home': 'Away',
        'groups.owner': 'Owner',
        'groups.system-admin': 'Administrators',
        'groups.system-users': 'Users',
        'groups.system-read-only': 'Read-Only Users',
        'config_entry.disabled_by.user': 'User',
        'config_entry.disabled_by.integration': 'Integration',
        'config_entry.disabled_by.config_entry': 'Config entry',
        'config_entry.disabled_by.device': 'Device',
        'ui.card.alarm_control_panel.code': 'Code',
        'ui.card.alarm_control_panel.clear_code': 'Clear',
        'ui.card.alarm_control_panel.disarm': 'Disarm',
        'ui.card.alarm_control_panel.arm_home': 'Arm home',
        'ui.card.alarm_control_panel.arm_away': 'Arm away',
        'ui.card.alarm_control_panel.arm_night': 'Arm night',
        'ui.card.alarm_control_panel.arm_vacation': 'Arm vacation',
        'ui.card.alarm_control_panel.arm_custom_bypass': 'Custom bypass',
        'ui.card.area.area_not_found': 'Area not found.',
        'ui.card.automation.last_triggered': 'Last triggered',
        'ui.card.automation.trigger': 'Run Actions',
        'ui.card.button.press': 'Press',
        'ui.card.camera.not_available': 'Image not available',
        'ui.card.climate.currently': 'Currently',
        'ui.card.climate.on_off': 'On / off',
        'ui.card.climate.target_temperature': 'Target temperature',
        'ui.card.climate.target_temperature_entity':
          '{name} target temperature',
        'ui.card.climate.target_temperature_mode':
          '{name} target temperature {mode}',
        'ui.card.climate.current_temperature': '{name} current temperature',
        'ui.card.climate.heating': '{name} heating',
        'ui.card.climate.cooling': '{name} cooling',
        'ui.card.climate.high': 'high',
        'ui.card.climate.low': 'low',
        'ui.card.climate.target_humidity': 'Target humidity',
        'ui.card.climate.operation': 'Operation',
        'ui.card.climate.fan_mode': 'Fan mode',
        'ui.card.climate.swing_mode': 'Swing mode',
        'ui.card.climate.preset_mode': 'Preset',
        'ui.card.climate.away_mode': 'Away mode',
        'ui.card.climate.aux_heat': 'Aux heat',
        'ui.card.counter.actions.increment': 'increment',
        'ui.card.counter.actions.decrement': 'decrement',
        'ui.card.counter.actions.reset': 'reset',
        'ui.card.cover.position': 'Position',
        'ui.card.cover.tilt_position': 'Tilt position',
        'ui.card.fan.speed': 'Speed',
        'ui.card.fan.preset_mode': 'Preset Mode',
        'ui.card.fan.oscillate': 'Oscillate',
        'ui.card.fan.direction': 'Direction',
        'ui.card.fan.forward': 'Forward',
        'ui.card.fan.reverse': 'Reverse',
        'ui.card.humidifier.humidity': 'Target humidity',
        'ui.card.humidifier.mode': 'Mode',
        'ui.card.humidifier.target_humidity_entity': '{name} target humidity',
        'ui.card.humidifier.on_entity': '{name} on',
        'ui.card.light.brightness': 'Brightness',
        'ui.card.light.color_temperature': 'Color temperature',
        'ui.card.light.white_value': 'White brightness',
        'ui.card.light.color_brightness': 'Color brightness',
        'ui.card.light.cold_white_value': 'Cold white brightness',
        'ui.card.light.warm_white_value': 'Warm white brightness',
        'ui.card.light.effect': 'Effect',
        'ui.card.lock.code': 'Code',
        'ui.card.lock.lock': 'Lock',
        'ui.card.lock.unlock': 'Unlock',
        'ui.card.media_player.source': 'Source',
        'ui.card.media_player.sound_mode': 'Sound mode',
        'ui.card.media_player.browse_media': 'Browse media',
        'ui.card.media_player.turn_on': 'Turn on',
        'ui.card.media_player.turn_off': 'Turn off',
        'ui.card.media_player.media_play': 'Play',
        'ui.card.media_player.media_play_pause': 'Play/pause',
        'ui.card.media_player.media_pause': 'Pause',
        'ui.card.media_player.media_stop': 'Stop',
        'ui.card.media_player.media_next_track': 'Next track',
        'ui.card.media_player.media_previous_track': 'Previous track',
        'ui.card.media_player.media_volume_up': 'Volume up',
        'ui.card.media_player.media_volume_down': 'Volume down',
        'ui.card.media_player.media_volume_mute': 'Volume mute',
        'ui.card.media_player.media_volume_unmute': 'Volume unmute',
        'ui.card.media_player.text_to_speak': 'Text to speak',
        'ui.card.persistent_notification.dismiss': 'Dismiss',
        'ui.card.scene.activate': 'Activate',
        'ui.card.script.run': 'Run',
        'ui.card.script.cancel': 'Cancel',
        'ui.card.script.cancel_multiple': 'Cancel {number}',
        'ui.card.service.run': 'Run',
        'ui.card.timer.actions.start': 'start',
        'ui.card.timer.actions.pause': 'pause',
        'ui.card.timer.actions.cancel': 'cancel',
        'ui.card.timer.actions.finish': 'finish',
        'ui.card.vacuum.actions.resume_cleaning': 'Resume cleaning',
        'ui.card.vacuum.actions.return_to_base': 'Return to dock',
        'ui.card.vacuum.actions.start_cleaning': 'Start cleaning',
        'ui.card.vacuum.actions.turn_on': 'Turn on',
        'ui.card.vacuum.actions.turn_off': 'Turn off',
        'ui.card.water_heater.currently': 'Currently',
        'ui.card.water_heater.on_off': 'On / off',
        'ui.card.water_heater.target_temperature': 'Target temperature',
        'ui.card.water_heater.operation': 'Operation',
        'ui.card.water_heater.away_mode': 'Away mode',
        'ui.card.weather.attributes.air_pressure': 'Air pressure',
        'ui.card.weather.attributes.humidity': 'Humidity',
        'ui.card.weather.attributes.temperature': 'Temperature',
        'ui.card.weather.attributes.visibility': 'Visibility',
        'ui.card.weather.attributes.wind_speed': 'Wind speed',
        'ui.card.weather.attributes.precipitation': 'Precipitation',
        'ui.card.weather.cardinal_direction.e': 'E',
        'ui.card.weather.cardinal_direction.ene': 'ENE',
        'ui.card.weather.cardinal_direction.ese': 'ESE',
        'ui.card.weather.cardinal_direction.n': 'N',
        'ui.card.weather.cardinal_direction.ne': 'NE',
        'ui.card.weather.cardinal_direction.nne': 'NNE',
        'ui.card.weather.cardinal_direction.nw': 'NW',
        'ui.card.weather.cardinal_direction.nnw': 'NNW',
        'ui.card.weather.cardinal_direction.s': 'S',
        'ui.card.weather.cardinal_direction.se': 'SE',
        'ui.card.weather.cardinal_direction.sse': 'SSE',
        'ui.card.weather.cardinal_direction.ssw': 'SSW',
        'ui.card.weather.cardinal_direction.sw': 'SW',
        'ui.card.weather.cardinal_direction.w': 'W',
        'ui.card.weather.cardinal_direction.wnw': 'WNW',
        'ui.card.weather.cardinal_direction.wsw': 'WSW',
        'ui.card.weather.day': 'Day',
        'ui.card.weather.night': 'Night',
        'ui.card.weather.forecast': 'Forecast',
        'ui.card.weather.high': 'High',
        'ui.card.weather.low': 'Low',
        'ui.common.and': 'and',
        'ui.common.continue': 'Continue',
        'ui.common.previous': 'Previous',
        'ui.common.loading': 'Loading',
        'ui.common.refresh': 'Refresh',
        'ui.common.cancel': 'Cancel',
        'ui.common.delete': 'Delete',
        'ui.common.remove': 'Remove',
        'ui.common.enable': 'Enable',
        'ui.common.disable': 'Disable',
        'ui.common.close': 'Close',
        'ui.common.clear': 'Clear',
        'ui.common.leave': 'Leave',
        'ui.common.stay': 'Stay',
        'ui.common.next': 'Next',
        'ui.common.back': 'Back',
        'ui.common.undo': 'Undo',
        'ui.common.move': 'Move',
        'ui.common.save': 'Save',
        'ui.common.submit': 'Submit',
        'ui.common.rename': 'Rename',
        'ui.common.yes': 'Yes',
        'ui.common.no': 'No',
        'ui.common.not_now': 'Not now',
        'ui.common.skip': 'Skip',
        'ui.common.menu': 'Menu',
        'ui.common.overflow_menu': 'Overflow menu',
        'ui.common.help': 'Help',
        'ui.common.successfully_saved': 'Successfully saved',
        'ui.common.successfully_deleted': 'Successfully deleted',
        'ui.common.error_required': 'Required',
        'ui.common.copied': 'Copied',
        'ui.common.copied_clipboard': 'Copied to clipboard',
        'ui.components.logbook.entries_not_found': 'No logbook events found.',
        'ui.components.logbook.by': 'by',
        'ui.components.logbook.by_service': 'by service',
        'ui.components.logbook.show_trace': 'Show trace',
        'ui.components.logbook.retrieval_error': 'Could not load logbook',
        'ui.components.logbook.messages.was_away': 'was detected away',
        'ui.components.logbook.messages.was_at_state':
          'was detected at {state}',
        'ui.components.logbook.messages.rose': 'rose',
        'ui.components.logbook.messages.set': 'set',
        'ui.components.logbook.messages.was_low': 'was low',
        'ui.components.logbook.messages.was_normal': 'was normal',
        'ui.components.logbook.messages.was_connected': 'was connected',
        'ui.components.logbook.messages.was_disconnected': 'was disconnected',
        'ui.components.logbook.messages.was_opened': 'was opened',
        'ui.components.logbook.messages.was_closed': 'was closed',
        'ui.components.logbook.messages.is_opening': 'is opening',
        'ui.components.logbook.messages.is_closing': 'is closing',
        'ui.components.logbook.messages.was_unlocked': 'was unlocked',
        'ui.components.logbook.messages.was_locked': 'was locked',
        'ui.components.logbook.messages.was_plugged_in': 'was plugged in',
        'ui.components.logbook.messages.was_unplugged': 'was unplugged',
        'ui.components.logbook.messages.was_at_home': 'was detected at home',
        'ui.components.logbook.messages.was_unsafe': 'was unsafe',
        'ui.components.logbook.messages.was_safe': 'was safe',
        'ui.components.logbook.messages.detected_device_class':
          'detected {device_class}',
        'ui.components.logbook.messages.cleared_device_class':
          'cleared (no {device_class} detected)',
        'ui.components.logbook.messages.turned_off': 'turned off',
        'ui.components.logbook.messages.turned_on': 'turned on',
        'ui.components.logbook.messages.changed_to_state': 'changed to {state}',
        'ui.components.logbook.messages.became_unavailable':
          'became unavailable',
        'ui.components.logbook.messages.detected_tampering':
          'detected tampering',
        'ui.components.logbook.messages.cleared_tampering': 'cleared tampering',
        'ui.components.entity.entity-picker.entity': 'Entity',
        'ui.components.entity.entity-picker.edit': 'Edit',
        'ui.components.entity.entity-picker.clear': 'Clear',
        'ui.components.entity.entity-picker.no_match':
          'No matching entities found',
        'ui.components.entity.entity-picker.show_entities': 'Show entities',
        'ui.components.entity.entity-attribute-picker.attribute': 'Attribute',
        'ui.components.entity.entity-attribute-picker.show_attributes':
          'Show attributes',
        'ui.components.target-picker.expand': 'Expand',
        'ui.components.target-picker.expand_area_id':
          'Split this area into separate devices and entities.',
        'ui.components.target-picker.expand_device_id':
          'Split this device into separate entities.',
        'ui.components.target-picker.remove': 'Remove',
        'ui.components.target-picker.remove_area_id': 'Remove area',
        'ui.components.target-picker.remove_device_id': 'Remove device',
        'ui.components.target-picker.remove_entity_id': 'Remove entity',
        'ui.components.target-picker.add_area_id': 'Choose area',
        'ui.components.target-picker.add_device_id': 'Choose device',
        'ui.components.target-picker.add_entity_id': 'Choose entity',
        'ui.components.user-picker.no_user': 'No user',
        'ui.components.user-picker.add_user': 'Add user',
        'ui.components.user-picker.remove_user': 'Remove user',
        'ui.components.blueprint-picker.select_blueprint': 'Select a Blueprint',
        'ui.components.blueprint-picker.add_user': 'Add user',
        'ui.components.blueprint-picker.remove_user': 'Remove user',
        'ui.components.device-picker.clear': 'Clear',
        'ui.components.device-picker.toggle': 'Toggle',
        'ui.components.device-picker.show_devices': 'Show devices',
        'ui.components.device-picker.no_devices': "You don't have any devices",
        'ui.components.device-picker.no_match': 'No matching devices found',
        'ui.components.device-picker.device': 'Device',
        'ui.components.device-picker.no_area': 'No area',
        'ui.components.area-picker.clear': 'Clear',
        'ui.components.area-picker.show_areas': 'Show areas',
        'ui.components.area-picker.area': 'Area',
        'ui.components.area-picker.add_new': 'Add new area…',
        'ui.components.area-picker.no_areas': "You don't have any areas",
        'ui.components.area-picker.no_match': 'No matching areas found',
        'ui.components.area-picker.add_dialog.title': 'Add new area',
        'ui.components.area-picker.add_dialog.text':
          'Enter the name of the new area.',
        'ui.components.area-picker.add_dialog.name': 'Name',
        'ui.components.area-picker.add_dialog.add': 'Add',
        'ui.components.area-picker.add_dialog.failed_create_area':
          'Failed to create area.',
        'ui.components.statistic-picker.statistic': 'Statistic',
        'ui.components.statistic-picker.no_statistics':
          "You don't have any statistics",
        'ui.components.statistic-picker.no_match':
          'No matching statistics found',
        'ui.components.statistic-picker.missing_entity':
          'Why is my entity not listed?',
        'ui.components.statistic-picker.learn_more':
          'Learn more about statistics',
        'ui.components.addon-picker.addon': 'Add-on',
        'ui.components.addon-picker.error.no_supervisor.title': 'No Supervisor',
        'ui.components.addon-picker.error.no_supervisor.description':
          'Add-ons are not supported.',
        'ui.components.addon-picker.error.fetch_addons.title':
          'Error loading add-ons',
        'ui.components.addon-picker.error.fetch_addons.description':
          'There was an error loading add-ons.',
        'ui.components.related-filter-menu.filter': 'Filter',
        'ui.components.related-filter-menu.filter_by_entity':
          'Filter by entity',
        'ui.components.related-filter-menu.filter_by_device':
          'Filter by device',
        'ui.components.related-filter-menu.filter_by_area': 'Filter by area',
        'ui.components.related-filter-menu.filtered_by_entity':
          'entity: {entity_name}',
        'ui.components.related-filter-menu.filtered_by_device':
          'device: {device_name}',
        'ui.components.related-filter-menu.filtered_by_area':
          'area: {area_name}',
        'ui.components.picture-upload.label': 'Picture',
        'ui.components.picture-upload.unsupported_format':
          'Unsupported format, please choose a JPEG, PNG or GIF image.',
        'ui.components.date-range-picker.start_date': 'Start date',
        'ui.components.date-range-picker.end_date': 'End date',
        'ui.components.date-range-picker.select': 'Select',
        'ui.components.date-range-picker.ranges.today': 'Today',
        'ui.components.date-range-picker.ranges.yesterday': 'Yesterday',
        'ui.components.date-range-picker.ranges.this_week': 'This week',
        'ui.components.date-range-picker.ranges.last_week': 'Last week',
        'ui.components.relative_time.never': 'Never',
        'ui.components.history_charts.history_disabled':
          'History integration disabled',
        'ui.components.history_charts.loading_history':
          'Loading state history…',
        'ui.components.history_charts.no_history_found':
          'No state history found.',
        'ui.components.statistics_charts.loading_statistics':
          'Loading statistics…',
        'ui.components.statistics_charts.no_statistics_found':
          'No statistics found.',
        'ui.components.statistics_charts.statistic_types.min': 'min',
        'ui.components.statistics_charts.statistic_types.max': 'max',
        'ui.components.statistics_charts.statistic_types.mean': 'mean',
        'ui.components.statistics_charts.statistic_types.sum': 'sum',
        'ui.components.service-picker.service': 'Service',
        'ui.components.service-control.required': 'This field is required',
        'ui.components.service-control.target': 'Targets',
        'ui.components.service-control.target_description':
          'What should this service use as targeted areas, devices or entities.',
        'ui.components.service-control.service_data': 'Service data',
        'ui.components.service-control.integration_doc':
          'Integration documentation',
        'ui.components.related-items.no_related_found':
          'No related items found.',
        'ui.components.related-items.integration': 'Integration',
        'ui.components.related-items.device': 'Device',
        'ui.components.related-items.area': 'Area',
        'ui.components.related-items.entity': 'Related entities',
        'ui.components.related-items.group': 'Part of the following groups',
        'ui.components.related-items.scene': 'Part of the following scenes',
        'ui.components.related-items.script': 'Part of the following scripts',
        'ui.components.related-items.automation':
          'Part of the following automations',
        'ui.components.data-table.search': 'Search',
        'ui.components.data-table.no-data': 'No data',
        'ui.components.data-table.filtering_by': 'Filtering by',
        'ui.components.data-table.hidden': '{number} hidden',
        'ui.components.data-table.clear': 'Clear',
        'ui.components.media-browser.pick': 'Pick',
        'ui.components.media-browser.play': 'Play',
        'ui.components.media-browser.play-media': 'Play Media',
        'ui.components.media-browser.pick-media': 'Pick Media',
        'ui.components.media-browser.no_items': 'No items',
        'ui.components.media-browser.choose_player': 'Choose Player',
        'ui.components.media-browser.media-player-browser':
          'Media Player Browser',
        'ui.components.media-browser.web-browser': 'Web Browser',
        'ui.components.media-browser.media_player': 'Media Player',
        'ui.components.media-browser.audio_not_supported':
          'Your browser does not support the audio element.',
        'ui.components.media-browser.video_not_supported':
          'Your browser does not support the video element.',
        'ui.components.media-browser.media_not_supported':
          'The Browser Media Player does not support this type of media',
        'ui.components.media-browser.media_browsing_error':
          'Media Browsing Error',
        'ui.components.media-browser.learn_adding_local_media':
          'Learn more about adding media in the {documentation}.',
        'ui.components.media-browser.local_media_files':
          'Place your video, audio and image files in the media directory to be able to browse and play them in the browser or on supported media players.',
        'ui.components.media-browser.documentation': 'documentation',
        'ui.components.media-browser.no_local_media_found':
          'No local media found',
        'ui.components.media-browser.no_media_folder':
          'It looks like you have not yet created a media directory.',
        'ui.components.media-browser.setup_local_help':
          'Check the {documentation} on how to setup local media.',
        'ui.components.media-browser.class.album': 'Album',
        'ui.components.media-browser.class.app': 'App',
        'ui.components.media-browser.class.artist': 'Artist',
        'ui.components.media-browser.class.channel': 'Channel',
        'ui.components.media-browser.class.composer': 'Composer',
        'ui.components.media-browser.class.contributing_artist':
          'Contributing Artist',
        'ui.components.media-browser.class.directory': 'Library',
        'ui.components.media-browser.class.episode': 'Episode',
        'ui.components.media-browser.class.game': 'Game',
        'ui.components.media-browser.class.genre': 'Genre',
        'ui.components.media-browser.class.image': 'Image',
        'ui.components.media-browser.class.movie': 'Movie',
        'ui.components.media-browser.class.music': 'Music',
        'ui.components.media-browser.class.playlist': 'Playlist',
        'ui.components.media-browser.class.podcast': 'Podcast',
        'ui.components.media-browser.class.season': 'Season',
        'ui.components.media-browser.class.track': 'Track',
        'ui.components.media-browser.class.tv_show': 'TV Show',
        'ui.components.media-browser.class.url': 'URL',
        'ui.components.media-browser.class.video': 'Video',
        'ui.components.calendar.my_calendars': 'My Calendars',
        'ui.components.calendar.today': 'Today',
        'ui.components.attributes.expansion_header': 'Attributes',
        'ui.components.qr-scanner.select_camera': 'Select camera',
        'ui.components.qr-scanner.only_https_supported':
          'You can only use your camera to scan a QR code when using HTTPS.',
        'ui.components.qr-scanner.not_supported':
          "Your browser doesn't support QR scanning.",
        'ui.components.qr-scanner.manual_input':
          'You can scan the QR code with another QR scanner and paste the code in the input below',
        'ui.components.qr-scanner.enter_qr_code': 'Enter QR code value',
        'ui.dialogs.quick-bar.commands.reload.reload': '{domain}',
        'ui.dialogs.quick-bar.commands.reload.core':
          'Location & customizations',
        'ui.dialogs.quick-bar.commands.reload.group':
          'Groups, group entities, and notify services',
        'ui.dialogs.quick-bar.commands.reload.automation': 'Automations',
        'ui.dialogs.quick-bar.commands.reload.script': 'Scripts',
        'ui.dialogs.quick-bar.commands.reload.scene': 'Scenes',
        'ui.dialogs.quick-bar.commands.reload.person': 'People',
        'ui.dialogs.quick-bar.commands.reload.zone': 'Zones',
        'ui.dialogs.quick-bar.commands.reload.input_boolean': 'Input booleans',
        'ui.dialogs.quick-bar.commands.reload.input_text': 'Input texts',
        'ui.dialogs.quick-bar.commands.reload.input_number': 'Input numbers',
        'ui.dialogs.quick-bar.commands.reload.input_datetime':
          'Input date times',
        'ui.dialogs.quick-bar.commands.reload.input_select': 'Input selects',
        'ui.dialogs.quick-bar.commands.reload.template': 'Template entities',
        'ui.dialogs.quick-bar.commands.reload.universal':
          'Universal media player entities',
        'ui.dialogs.quick-bar.commands.reload.rest':
          'Rest entities and notify services',
        'ui.dialogs.quick-bar.commands.reload.command_line':
          'Command line entities',
        'ui.dialogs.quick-bar.commands.reload.filter': 'Filter entities',
        'ui.dialogs.quick-bar.commands.reload.statistics':
          'Statistics entities',
        'ui.dialogs.quick-bar.commands.reload.generic':
          'Generic IP camera entities',
        'ui.dialogs.quick-bar.commands.reload.generic_thermostat':
          'Generic thermostat entities',
        'ui.dialogs.quick-bar.commands.reload.homekit': 'HomeKit',
        'ui.dialogs.quick-bar.commands.reload.min_max': 'Min/max entities',
        'ui.dialogs.quick-bar.commands.reload.history_stats':
          'History stats entities',
        'ui.dialogs.quick-bar.commands.reload.trend': 'Trend entities',
        'ui.dialogs.quick-bar.commands.reload.ping':
          'Ping binary sensor entities',
        'ui.dialogs.quick-bar.commands.reload.filesize': 'File size entities',
        'ui.dialogs.quick-bar.commands.reload.telegram':
          'Telegram notify services',
        'ui.dialogs.quick-bar.commands.reload.smtp': 'SMTP notify services',
        'ui.dialogs.quick-bar.commands.reload.mqtt':
          'Manually configured MQTT entities',
        'ui.dialogs.quick-bar.commands.reload.rpi_gpio':
          'Raspberry Pi GPIO entities',
        'ui.dialogs.quick-bar.commands.server_control.perform_action':
          '{action} server',
        'ui.dialogs.quick-bar.commands.server_control.restart': 'Restart',
        'ui.dialogs.quick-bar.commands.server_control.stop': 'Stop',
        'ui.dialogs.quick-bar.commands.types.reload': 'Reload',
        'ui.dialogs.quick-bar.commands.types.navigation': 'Navigate',
        'ui.dialogs.quick-bar.commands.types.server_control': 'Server',
        'ui.dialogs.quick-bar.commands.navigation.logs': 'Logs',
        'ui.dialogs.quick-bar.commands.navigation.automation': 'Automations',
        'ui.dialogs.quick-bar.commands.navigation.script': 'Scripts',
        'ui.dialogs.quick-bar.commands.navigation.integrations': 'Integrations',
        'ui.dialogs.quick-bar.commands.navigation.areas': 'Areas',
        'ui.dialogs.quick-bar.commands.navigation.scene': 'Scenes',
        'ui.dialogs.quick-bar.commands.navigation.helpers': 'Helpers',
        'ui.dialogs.quick-bar.commands.navigation.tag': 'Tags',
        'ui.dialogs.quick-bar.commands.navigation.person': 'People',
        'ui.dialogs.quick-bar.commands.navigation.devices': 'Devices',
        'ui.dialogs.quick-bar.commands.navigation.entities': 'Entities',
        'ui.dialogs.quick-bar.commands.navigation.energy': 'Energy',
        'ui.dialogs.quick-bar.commands.navigation.lovelace':
          'Lovelace Dashboards',
        'ui.dialogs.quick-bar.commands.navigation.core': 'General',
        'ui.dialogs.quick-bar.commands.navigation.zone': 'Zones',
        'ui.dialogs.quick-bar.commands.navigation.users': 'Users',
        'ui.dialogs.quick-bar.commands.navigation.info': 'Info',
        'ui.dialogs.quick-bar.commands.navigation.blueprint': 'Blueprints',
        'ui.dialogs.quick-bar.commands.navigation.server_control':
          'Server Controls',
        'ui.dialogs.quick-bar.filter_placeholder': 'Entity Filter',
        'ui.dialogs.voice_command.did_not_hear':
          'Home Assistant did not hear anything',
        'ui.dialogs.voice_command.found': 'I found the following for you:',
        'ui.dialogs.voice_command.error': 'Oops, an error has occurred',
        'ui.dialogs.voice_command.how_can_i_help': 'How can I help?',
        'ui.dialogs.voice_command.label': "Type a question and press 'Enter'",
        'ui.dialogs.voice_command.label_voice':
          "Type and press 'Enter' or tap the microphone to speak",
        'ui.dialogs.generic.cancel': 'Cancel',
        'ui.dialogs.generic.ok': 'OK',
        'ui.dialogs.generic.default_confirmation_title': 'Are you sure?',
        'ui.dialogs.generic.close': 'Close',
        'ui.dialogs.image_cropper.crop': 'Crop',
        'ui.dialogs.more_info_control.dismiss': 'Dismiss dialog',
        'ui.dialogs.more_info_control.settings': 'Entity settings',
        'ui.dialogs.more_info_control.edit': 'Edit entity',
        'ui.dialogs.more_info_control.details': 'Details',
        'ui.dialogs.more_info_control.history': 'History',
        'ui.dialogs.more_info_control.logbook': 'Logbook',
        'ui.dialogs.more_info_control.last_changed': 'Last changed',
        'ui.dialogs.more_info_control.last_updated': 'Last updated',
        'ui.dialogs.more_info_control.show_more': 'Show more',
        'ui.dialogs.more_info_control.script.last_action': 'Last action',
        'ui.dialogs.more_info_control.script.last_triggered': 'Last triggered',
        'ui.dialogs.more_info_control.sun.elevation': 'Elevation',
        'ui.dialogs.more_info_control.sun.rising': 'Rising',
        'ui.dialogs.more_info_control.sun.setting': 'Setting',
        'ui.dialogs.more_info_control.updater.title': 'Update Instructions',
        'ui.dialogs.more_info_control.remote.activity': 'Current activity',
        'ui.dialogs.more_info_control.restored.not_provided':
          'This entity is currently unavailable and is an orphan to a removed, changed or dysfunctional integration or device.',
        'ui.dialogs.more_info_control.restored.remove_intro':
          'If the entity is no longer in use, you can clean it up by removing it.',
        'ui.dialogs.more_info_control.restored.remove_action': 'Remove entity',
        'ui.dialogs.more_info_control.restored.confirm_remove_title':
          'Remove entity?',
        'ui.dialogs.more_info_control.restored.confirm_remove_text':
          'Are you sure you want to remove this entity?',
        'ui.dialogs.more_info_control.vacuum.status': 'Status',
        'ui.dialogs.more_info_control.vacuum.commands':
          'Vacuum cleaner commands:',
        'ui.dialogs.more_info_control.vacuum.fan_speed': 'Fan speed',
        'ui.dialogs.more_info_control.vacuum.start': 'Start',
        'ui.dialogs.more_info_control.vacuum.pause': 'Pause',
        'ui.dialogs.more_info_control.vacuum.stop': 'Stop',
        'ui.dialogs.more_info_control.vacuum.clean_spot': 'Clean spot',
        'ui.dialogs.more_info_control.vacuum.locate': 'Locate',
        'ui.dialogs.more_info_control.vacuum.return_home': 'Return home',
        'ui.dialogs.more_info_control.vacuum.start_pause': 'Start/Pause',
        'ui.dialogs.more_info_control.person.create_zone':
          'Create zone from current location',
        'ui.dialogs.more_info_control.cover.open_cover': 'Open cover',
        'ui.dialogs.more_info_control.cover.close_cover': 'Close cover',
        'ui.dialogs.more_info_control.cover.open_tilt_cover': 'Open cover tilt',
        'ui.dialogs.more_info_control.cover.close_tilt_cover':
          'Close cover tilt',
        'ui.dialogs.more_info_control.cover.stop_cover': 'Stop cover',
        'ui.dialogs.entity_registry.settings': 'Settings',
        'ui.dialogs.entity_registry.control': 'Control',
        'ui.dialogs.entity_registry.related': 'Related',
        'ui.dialogs.entity_registry.dismiss': 'Dismiss',
        'ui.dialogs.entity_registry.no_unique_id':
          "This entity (''{entity_id}'') does not have a unique ID, therefore its settings cannot be managed from the UI. See the {faq_link} for more detail.",
        'ui.dialogs.entity_registry.faq': 'documentation',
        'ui.dialogs.entity_registry.editor.name': 'Name',
        'ui.dialogs.entity_registry.editor.icon': 'Icon',
        'ui.dialogs.entity_registry.editor.icon_error':
          "Icons should be in the format 'prefix:iconname', e.g. 'mdi:home'",
        'ui.dialogs.entity_registry.editor.entity_id': 'Entity ID',
        'ui.dialogs.entity_registry.editor.device_class': 'Show as',
        'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.door':
          'Door',
        'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.garage_door':
          'Garage door',
        'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.window':
          'Window',
        'ui.dialogs.entity_registry.editor.device_classes.binary_sensor.opening':
          'Other',
        'ui.dialogs.entity_registry.editor.device_classes.cover.door': 'Door',
        'ui.dialogs.entity_registry.editor.device_classes.cover.garage':
          'Garage door',
        'ui.dialogs.entity_registry.editor.device_classes.cover.window':
          'Window',
        'ui.dialogs.entity_registry.editor.unavailable':
          'This entity is unavailable.',
        'ui.dialogs.entity_registry.editor.enabled_label': 'Enable entity',
        'ui.dialogs.entity_registry.editor.enabled_cause':
          'Disabled by {cause}.',
        'ui.dialogs.entity_registry.editor.device_disabled':
          'The device of this entity is disabled.',
        'ui.dialogs.entity_registry.editor.open_device_settings':
          'Open device settings',
        'ui.dialogs.entity_registry.editor.enabled_description':
          'Disabled entities will not be added to Home Assistant.',
        'ui.dialogs.entity_registry.editor.enabled_delay_confirm':
          'The enabled entities will be added to Home Assistant in {delay} seconds',
        'ui.dialogs.entity_registry.editor.enabled_restart_confirm':
          'Restart Home Assistant to finish enabling the entities',
        'ui.dialogs.entity_registry.editor.delete': 'Delete',
        'ui.dialogs.entity_registry.editor.confirm_delete':
          'Are you sure you want to delete this entity?',
        'ui.dialogs.entity_registry.editor.update': 'Update',
        'ui.dialogs.entity_registry.editor.note':
          'Note: This might not work yet with all integrations.',
        'ui.dialogs.entity_registry.editor.advanced': 'Advanced settings',
        'ui.dialogs.entity_registry.editor.area': 'Set entity area only',
        'ui.dialogs.entity_registry.editor.area_note':
          'By default the entities of a device are in the same area as the device. If you change the area of this entity, it will no longer follow the area of the device.',
        'ui.dialogs.entity_registry.editor.follow_device_area':
          'Follow device area',
        'ui.dialogs.entity_registry.editor.change_device_area':
          'Change device area',
        'ui.dialogs.helper_settings.platform_not_loaded':
          "The {platform} integration is not loaded. Please add it to your configuration either by adding 'default_config:' or ''{platform}:''.",
        'ui.dialogs.helper_settings.yaml_not_editable':
          'The settings of this entity cannot be edited from the UI. Only entities set up from the UI are configurable from the UI.',
        'ui.dialogs.helper_settings.required_error_msg':
          'This field is required',
        'ui.dialogs.helper_settings.generic.name': 'Name',
        'ui.dialogs.helper_settings.generic.icon': 'Icon',
        'ui.dialogs.helper_settings.input_datetime.date': 'Date',
        'ui.dialogs.helper_settings.input_datetime.time': 'Time',
        'ui.dialogs.helper_settings.input_datetime.datetime': 'Date and time',
        'ui.dialogs.helper_settings.input_datetime.mode':
          'What do you want to input',
        'ui.dialogs.helper_settings.input_text.min': 'Minimum length',
        'ui.dialogs.helper_settings.input_text.max': 'Maximum length',
        'ui.dialogs.helper_settings.input_text.mode': 'Display mode',
        'ui.dialogs.helper_settings.input_text.text': 'Text',
        'ui.dialogs.helper_settings.input_text.password': 'Password',
        'ui.dialogs.helper_settings.input_text.pattern':
          'Regex pattern for client-side validation',
        'ui.dialogs.helper_settings.input_number.min': 'Minimum value',
        'ui.dialogs.helper_settings.input_number.max': 'Maximum value',
        'ui.dialogs.helper_settings.input_number.mode': 'Display mode',
        'ui.dialogs.helper_settings.input_number.box': 'Input field',
        'ui.dialogs.helper_settings.input_number.slider': 'Slider',
        'ui.dialogs.helper_settings.input_number.step': 'Step size',
        'ui.dialogs.helper_settings.input_number.unit_of_measurement':
          'Unit of measurement',
        'ui.dialogs.helper_settings.input_select.options': 'Options',
        'ui.dialogs.helper_settings.input_select.add_option': 'Add option',
        'ui.dialogs.helper_settings.input_select.no_options':
          'There are no options yet.',
        'ui.dialogs.helper_settings.input_select.add': 'Add',
        'ui.dialogs.helper_settings.counter.minimum': 'Minimum value',
        'ui.dialogs.helper_settings.counter.maximum': 'Maximum value',
        'ui.dialogs.helper_settings.counter.initial': 'Initial value',
        'ui.dialogs.helper_settings.counter.restore':
          'Restore the last known value when Home Assistant starts',
        'ui.dialogs.helper_settings.counter.step': 'Step size',
        'ui.dialogs.helper_settings.timer.duration': 'Duration',
        'ui.dialogs.options_flow.form.header': 'Options',
        'ui.dialogs.options_flow.loading.loading_flow':
          'Please wait while the options for {integration} are being initialized',
        'ui.dialogs.options_flow.loading.loading_step':
          'Loading next step for {integration}',
        'ui.dialogs.options_flow.success.description':
          'Options successfully saved.',
        'ui.dialogs.config_entry_system_options.title':
          'System Options for {integration}',
        'ui.dialogs.config_entry_system_options.enable_new_entities_label':
          'Enable newly added entities.',
        'ui.dialogs.config_entry_system_options.enable_new_entities_description':
          'If newly discovered devices for {integration} should be automatically added.',
        'ui.dialogs.config_entry_system_options.enable_polling_label':
          'Enable polling for updates.',
        'ui.dialogs.config_entry_system_options.enable_polling_description':
          'If Home Assistant should automatically poll {integration} entities for updates.',
        'ui.dialogs.config_entry_system_options.restart_home_assistant':
          'You need to restart Home Assistant for your changes to take effect.',
        'ui.dialogs.config_entry_system_options.update': 'Update',
        'ui.dialogs.zha_reconfigure_device.heading': 'Reconfiguring device',
        'ui.dialogs.zha_reconfigure_device.configuring_alt': 'Configuring',
        'ui.dialogs.zha_reconfigure_device.introduction':
          'Reconfigure a device on your Zigbee network. Use this feature if your device is not functioning correctly.',
        'ui.dialogs.zha_reconfigure_device.battery_device_warning':
          "You will need to wake battery powered devices before starting the reconfiguration process. Refer to your device's manual for instructions on how to wake the device.",
        'ui.dialogs.zha_reconfigure_device.run_in_background':
          'You can close this dialog and the reconfiguration will continue in the background.',
        'ui.dialogs.zha_reconfigure_device.start_reconfiguration':
          'Start Reconfiguration',
        'ui.dialogs.zha_reconfigure_device.in_progress':
          'The device is being reconfigured. This may take some time.',
        'ui.dialogs.zha_reconfigure_device.configuration_failed':
          'The device reconfiguration failed. Additional information may be available in the logs.',
        'ui.dialogs.zha_reconfigure_device.configuration_complete':
          'Device reconfiguration complete.',
        'ui.dialogs.zha_reconfigure_device.button_show': 'Show Details',
        'ui.dialogs.zha_reconfigure_device.button_hide': 'Hide Details',
        'ui.dialogs.zha_reconfigure_device.cluster_header': 'Cluster',
        'ui.dialogs.zha_reconfigure_device.bind_header': 'Binding',
        'ui.dialogs.zha_reconfigure_device.reporting_header': 'Reporting',
        'ui.dialogs.zha_reconfigure_device.attribute': 'Attribute',
        'ui.dialogs.zha_reconfigure_device.min_max_change': 'min/max/change',
        'ui.dialogs.zha_device_info.manuf': 'by {manufacturer}',
        'ui.dialogs.zha_device_info.no_area': 'No Area',
        'ui.dialogs.zha_device_info.device_signature':
          'Zigbee device signature',
        'ui.dialogs.zha_device_info.device_children': 'Zigbee device children',
        'ui.dialogs.zha_device_info.buttons.add': 'Add Devices via this device',
        'ui.dialogs.zha_device_info.buttons.remove': 'Remove Device',
        'ui.dialogs.zha_device_info.buttons.clusters': 'Manage Clusters',
        'ui.dialogs.zha_device_info.buttons.reconfigure': 'Reconfigure Device',
        'ui.dialogs.zha_device_info.buttons.zigbee_information':
          'Zigbee device signature',
        'ui.dialogs.zha_device_info.buttons.device_children': 'View Children',
        'ui.dialogs.zha_device_info.buttons.view_in_visualization':
          'View in Visualization',
        'ui.dialogs.zha_device_info.services.reconfigure':
          'Reconfigure ZHA device (heal device). Use this if you are having issues with the device. If the device in question is a battery powered device please ensure it is awake and accepting commands when you use this service.',
        'ui.dialogs.zha_device_info.services.updateDeviceName':
          'Set a custom name for this device in the device registry.',
        'ui.dialogs.zha_device_info.services.remove':
          'Remove a device from the Zigbee network.',
        'ui.dialogs.zha_device_info.services.zigbee_information':
          'View the Zigbee information for the device.',
        'ui.dialogs.zha_device_info.confirmations.remove':
          'Are you sure that you want to remove the device?',
        'ui.dialogs.zha_device_info.quirk': 'Quirk',
        'ui.dialogs.zha_device_info.last_seen': 'Last Seen',
        'ui.dialogs.zha_device_info.power_source': 'Power Source',
        'ui.dialogs.zha_device_info.unknown': 'Unknown',
        'ui.dialogs.zha_device_info.zha_device_card.device_name_placeholder':
          'Change device name',
        'ui.dialogs.domain_toggler.title': 'Toggle Domains',
        'ui.dialogs.domain_toggler.reset_entities': 'Reset Entities',
        'ui.dialogs.mqtt_device_debug_info.title': '{device} debug info',
        'ui.dialogs.mqtt_device_debug_info.deserialize':
          'Attempt to parse MQTT messages as JSON',
        'ui.dialogs.mqtt_device_debug_info.entities': 'Entities',
        'ui.dialogs.mqtt_device_debug_info.no_entities': 'No entities',
        'ui.dialogs.mqtt_device_debug_info.no_triggers': 'No triggers',
        'ui.dialogs.mqtt_device_debug_info.payload_display': 'Payload display',
        'ui.dialogs.mqtt_device_debug_info.recent_messages':
          '{n} most recently received message(s)',
        'ui.dialogs.mqtt_device_debug_info.show_as_yaml': 'Show as YAML',
        'ui.dialogs.mqtt_device_debug_info.triggers': 'Triggers',
        'ui.duration.second':
          '{count} {count, plural,\n  one {second}\n  other {seconds}\n}',
        'ui.duration.minute':
          '{count} {count, plural,\n  one {minute}\n  other {minutes}\n}',
        'ui.duration.hour':
          '{count} {count, plural,\n  one {hour}\n  other {hours}\n}',
        'ui.duration.day':
          '{count} {count, plural,\n  one {day}\n  other {days}\n}',
        'ui.duration.week':
          '{count} {count, plural,\n  one {week}\n  other {weeks}\n}',
        'ui.errors.config.no_type_provided': 'No type provided.',
        'ui.errors.config.error_detected': 'Configuration errors detected',
        'ui.errors.config.editor_not_available':
          "No visual editor available for type ''{type}''.",
        'ui.errors.config.editor_not_supported':
          'Visual editor is not supported for this configuration',
        'ui.errors.config.edit_in_yaml_supported':
          'You can still edit your config in YAML.',
        'ui.errors.config.key_missing': "Required key ''{key}'' is missing.",
        'ui.errors.config.key_not_expected':
          "Key ''{key}'' is not expected or not supported by the visual editor.",
        'ui.errors.config.key_wrong_type':
          "The provided value for ''{key}'' is not supported by the visual editor. We support ({type_correct}) but received ({type_wrong}).",
        'ui.errors.config.no_template_editor_support':
          'Templates not supported in visual editor',
        'ui.errors.supervisor.title': 'Could not load the Supervisor panel!',
        'ui.errors.supervisor.wait':
          'If you just started, make sure you have given the Supervisor enough time to start.',
        'ui.errors.supervisor.ask': 'Ask for help',
        'ui.errors.supervisor.reboot': 'Try a reboot of the host',
        'ui.errors.supervisor.observer': 'Check the Observer',
        'ui.errors.supervisor.system_health': 'Check System Health',
        'ui.login-form.password': 'Password',
        'ui.login-form.remember': 'Remember',
        'ui.login-form.log_in': 'Log in',
        'ui.notification_drawer.click_to_configure':
          'Click button to configure {entity}',
        'ui.notification_drawer.empty': 'No Notifications',
        'ui.notification_drawer.title': 'Notifications',
        'ui.notification_drawer.close': 'Close',
        'ui.notification_drawer.dismiss_all': 'Dismiss all',
        'ui.notification_toast.service_call_failed':
          'Failed to call service {service}.',
        'ui.notification_toast.connection_lost':
          'Connection lost. Reconnecting…',
        'ui.notification_toast.started': 'Home Assistant has started!',
        'ui.notification_toast.starting':
          'Home Assistant is starting, not everything will be available until it is finished.',
        'ui.notification_toast.wrapping_up_startup':
          'Wrapping up startup, not everything will be available until it is finished.',
        'ui.notification_toast.integration_starting':
          'Starting {integration}, not everything will be available until it is finished.',
        'ui.notification_toast.triggered': 'Triggered {name}',
        'ui.notification_toast.dismiss': 'Dismiss',
        'ui.sidebar.external_app_configuration': 'App Configuration',
        'ui.sidebar.sidebar_toggle': 'Sidebar Toggle',
        'ui.sidebar.done': 'Done',
        'ui.sidebar.hide_panel': 'Hide panel',
        'ui.sidebar.show_panel': 'Show panel',
        'component.group.state._.closed': 'Closed',
        'component.group.state._.home': 'Home',
        'component.group.state._.locked': 'Locked',
        'component.group.state._.not_home': 'Away',
        'component.group.state._.off': 'Off',
        'component.group.state._.ok': 'OK',
        'component.group.state._.on': 'On',
        'component.group.state._.open': 'Open',
        'component.group.state._.problem': 'Problem',
        'component.group.state._.unlocked': 'Unlocked',
        'component.cover.state._.closed': 'Closed',
        'component.cover.state._.closing': 'Closing',
        'component.cover.state._.open': 'Open',
        'component.cover.state._.opening': 'Opening',
        'component.cover.state._.stopped': 'Stopped',
        'component.person.state._.home': 'Home',
        'component.person.state._.not_home': 'Away',
        'component.alarm_control_panel.state._.armed': 'Armed',
        'component.alarm_control_panel.state._.armed_away': 'Armed away',
        'component.alarm_control_panel.state._.armed_custom_bypass':
          'Armed custom bypass',
        'component.alarm_control_panel.state._.armed_home': 'Armed home',
        'component.alarm_control_panel.state._.armed_night': 'Armed night',
        'component.alarm_control_panel.state._.armed_vacation':
          'Armed vacation',
        'component.alarm_control_panel.state._.arming': 'Arming',
        'component.alarm_control_panel.state._.disarmed': 'Disarmed',
        'component.alarm_control_panel.state._.disarming': 'Disarming',
        'component.alarm_control_panel.state._.pending': 'Pending',
        'component.alarm_control_panel.state._.triggered': 'Triggered',
        'component.timer.state._.active': 'Active',
        'component.timer.state._.idle': 'Idle',
        'component.timer.state._.paused': 'Paused',
        'component.automation.state._.off': 'Off',
        'component.automation.state._.on': 'On',
        'component.device_tracker.state._.home': 'Home',
        'component.device_tracker.state._.not_home': 'Away',
        'component.sun.state._.above_horizon': 'Above horizon',
        'component.sun.state._.below_horizon': 'Below horizon',
        'component.script.state._.off': 'Off',
        'component.script.state._.on': 'On',
        'component.switch.state._.off': 'Off',
        'component.switch.state._.on': 'On',
        'component.input_boolean.state._.off': 'Off',
        'component.input_boolean.state._.on': 'On',
        'component.light.state._.off': 'Off',
        'component.light.state._.on': 'On',
        'component.lock.state._.locked': 'Locked',
        'component.lock.state._.unlocked': 'Unlocked',
        'component.camera.state._.idle': 'Idle',
        'component.camera.state._.recording': 'Recording',
        'component.camera.state._.streaming': 'Streaming',
        'component.climate.state._.auto': 'Auto',
        'component.climate.state._.cool': 'Cool',
        'component.climate.state._.dry': 'Dry',
        'component.climate.state._.fan_only': 'Fan only',
        'component.climate.state._.heat': 'Heat',
        'component.climate.state._.heat_cool': 'Heat/Cool',
        'component.climate.state._.off': 'Off',
        'component.binary_sensor.state._.off': 'Off',
        'component.binary_sensor.state._.on': 'On',
        'component.binary_sensor.state.battery.off': 'Normal',
        'component.binary_sensor.state.battery.on': 'Low',
        'component.binary_sensor.state.battery_charging.off': 'Not charging',
        'component.binary_sensor.state.battery_charging.on': 'Charging',
        'component.binary_sensor.state.cold.off': 'Normal',
        'component.binary_sensor.state.cold.on': 'Cold',
        'component.binary_sensor.state.connectivity.off': 'Disconnected',
        'component.binary_sensor.state.connectivity.on': 'Connected',
        'component.binary_sensor.state.door.off': 'Closed',
        'component.binary_sensor.state.door.on': 'Open',
        'component.binary_sensor.state.garage_door.off': 'Closed',
        'component.binary_sensor.state.garage_door.on': 'Open',
        'component.binary_sensor.state.gas.off': 'Clear',
        'component.binary_sensor.state.gas.on': 'Detected',
        'component.binary_sensor.state.heat.off': 'Normal',
        'component.binary_sensor.state.heat.on': 'Hot',
        'component.binary_sensor.state.light.off': 'No light',
        'component.binary_sensor.state.light.on': 'Light detected',
        'component.binary_sensor.state.lock.off': 'Locked',
        'component.binary_sensor.state.lock.on': 'Unlocked',
        'component.binary_sensor.state.moisture.off': 'Dry',
        'component.binary_sensor.state.moisture.on': 'Wet',
        'component.binary_sensor.state.motion.off': 'Clear',
        'component.binary_sensor.state.motion.on': 'Detected',
        'component.binary_sensor.state.moving.off': 'Not moving',
        'component.binary_sensor.state.moving.on': 'Moving',
        'component.binary_sensor.state.occupancy.off': 'Clear',
        'component.binary_sensor.state.occupancy.on': 'Detected',
        'component.binary_sensor.state.opening.off': 'Closed',
        'component.binary_sensor.state.opening.on': 'Open',
        'component.binary_sensor.state.plug.off': 'Unplugged',
        'component.binary_sensor.state.plug.on': 'Plugged in',
        'component.binary_sensor.state.presence.off': 'Away',
        'component.binary_sensor.state.presence.on': 'Home',
        'component.binary_sensor.state.problem.off': 'OK',
        'component.binary_sensor.state.problem.on': 'Problem',
        'component.binary_sensor.state.running.off': 'Not running',
        'component.binary_sensor.state.running.on': 'Running',
        'component.binary_sensor.state.safety.off': 'Safe',
        'component.binary_sensor.state.safety.on': 'Unsafe',
        'component.binary_sensor.state.smoke.off': 'Clear',
        'component.binary_sensor.state.smoke.on': 'Detected',
        'component.binary_sensor.state.sound.off': 'Clear',
        'component.binary_sensor.state.sound.on': 'Detected',
        'component.binary_sensor.state.update.off': 'Up-to-date',
        'component.binary_sensor.state.update.on': 'Update available',
        'component.binary_sensor.state.vibration.off': 'Clear',
        'component.binary_sensor.state.vibration.on': 'Detected',
        'component.binary_sensor.state.window.off': 'Closed',
        'component.binary_sensor.state.window.on': 'Open',
        'component.sensor.state._.off': 'Off',
        'component.sensor.state._.on': 'On',
        'component.fan.state._.off': 'Off',
        'component.fan.state._.on': 'On',
        'component.weather.state._.clear-night': 'Clear, night',
        'component.weather.state._.cloudy': 'Cloudy',
        'component.weather.state._.exceptional': 'Exceptional',
        'component.weather.state._.fog': 'Fog',
        'component.weather.state._.hail': 'Hail',
        'component.weather.state._.lightning': 'Lightning',
        'component.weather.state._.lightning-rainy': 'Lightning, rainy',
        'component.weather.state._.partlycloudy': 'Partly cloudy',
        'component.weather.state._.pouring': 'Pouring',
        'component.weather.state._.rainy': 'Rainy',
        'component.weather.state._.snowy': 'Snowy',
        'component.weather.state._.snowy-rainy': 'Snowy, rainy',
        'component.weather.state._.sunny': 'Sunny',
        'component.weather.state._.windy': 'Windy',
        'component.weather.state._.windy-variant': 'Windy',
        'component.media_player.state._.idle': 'Idle',
        'component.media_player.state._.off': 'Off',
        'component.media_player.state._.on': 'On',
        'component.media_player.state._.paused': 'Paused',
        'component.media_player.state._.playing': 'Playing',
        'component.media_player.state._.standby': 'Standby',
        'ui.panel.lovelace.cards.confirm_delete':
          'Are you sure you want to delete this card?',
        'ui.panel.lovelace.cards.show_more_info': 'Show more information',
        'ui.panel.lovelace.cards.actions.action_confirmation':
          "Are you sure you want to run action ''{action}''?",
        'ui.panel.lovelace.cards.actions.no_entity_more_info':
          'No entity provided for more info dialog',
        'ui.panel.lovelace.cards.actions.no_entity_toggle':
          'No entity provided to toggle',
        'ui.panel.lovelace.cards.actions.no_navigation_path':
          'No navigation path specified',
        'ui.panel.lovelace.cards.actions.no_url': 'No URL to open specified',
        'ui.panel.lovelace.cards.actions.no_service':
          'No service to run specified',
        'ui.panel.lovelace.cards.empty_state.title': 'Welcome Home',
        'ui.panel.lovelace.cards.empty_state.no_devices':
          'This page allows you to control your devices, however it looks like you have no devices set up yet. Head to the integrations page to get started.',
        'ui.panel.lovelace.cards.empty_state.go_to_integrations_page':
          'Go to the integrations page.',
        'ui.panel.lovelace.cards.entities.never_triggered': 'Never triggered',
        'ui.panel.lovelace.cards.shopping-list.checked_items': 'Checked items',
        'ui.panel.lovelace.cards.shopping-list.clear_items':
          'Clear checked items',
        'ui.panel.lovelace.cards.shopping-list.add_item': 'Add item',
        'ui.panel.lovelace.cards.shopping-list.reorder_items': 'Reorder items',
        'ui.panel.lovelace.cards.shopping-list.drag_and_drop': 'Drag and drop',
        'ui.panel.lovelace.cards.picture-elements.hold': 'Hold:',
        'ui.panel.lovelace.cards.picture-elements.tap': 'Tap:',
        'ui.panel.lovelace.cards.picture-elements.navigate_to':
          'Navigate to {location}',
        'ui.panel.lovelace.cards.picture-elements.url':
          'Open window to {url_path}',
        'ui.panel.lovelace.cards.picture-elements.toggle': 'Toggle {name}',
        'ui.panel.lovelace.cards.picture-elements.call_service':
          'Call service {name}',
        'ui.panel.lovelace.cards.picture-elements.more_info':
          'Show more info: {name}',
        'ui.panel.lovelace.cards.iframe.error_secure_context':
          'Unable to load iframes pointing at websites using {target_protocol} if Home Assistant is served over {context_protocol}.',
        'ui.panel.lovelace.cards.safe-mode.header': 'Safe Mode Activated',
        'ui.panel.lovelace.cards.safe-mode.description':
          'Home Assistant ran into trouble while loading your configuration and is now running in safe mode. Take a look at the error log to see what went wrong.',
        'ui.panel.lovelace.cards.starting.description':
          'Home Assistant is starting, please wait…',
        'ui.panel.lovelace.cards.map.reset_focus': 'Reset focus',
        'ui.panel.lovelace.cards.energy.loading': 'Loading...',
        'ui.panel.lovelace.cards.energy.no_data':
          'There is no data to show. It can take up to 2 hours for new data to arrive after you configure your energy dashboard.',
        'ui.panel.lovelace.cards.energy.no_data_period':
          'There is no data for this period.',
        'ui.panel.lovelace.cards.energy.energy_usage_graph.total_consumed':
          'Total consumed {num} kWh',
        'ui.panel.lovelace.cards.energy.energy_usage_graph.total_returned':
          'Total returned {num} kWh',
        'ui.panel.lovelace.cards.energy.energy_usage_graph.combined_from_grid':
          'Combined from grid',
        'ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_solar':
          'Consumed solar',
        'ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_battery':
          'Consumed battery',
        'ui.panel.lovelace.cards.energy.energy_sources_table.grid_total':
          'Grid total',
        'ui.panel.lovelace.cards.energy.energy_sources_table.source': 'Source',
        'ui.panel.lovelace.cards.energy.energy_sources_table.energy': 'Energy',
        'ui.panel.lovelace.cards.energy.energy_sources_table.cost': 'Cost',
        'ui.panel.lovelace.cards.energy.energy_sources_table.battery_total':
          'Battery total',
        'ui.panel.lovelace.cards.energy.energy_sources_table.total_costs':
          'Total costs',
        'ui.panel.lovelace.cards.energy.energy_solar_graph.production':
          'Production {name}',
        'ui.panel.lovelace.cards.energy.energy_solar_graph.forecast':
          'Forecast {name}',
        'ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used':
          'This card indicates how much of the solar energy you produced was used by your home instead of being returned to the grid.',
        'ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used_charge_home_bat':
          'If this number is typically very low, indicating excess solar production, you might want to consider charging a home battery or electric car from your solar panels at times of high solar production.',
        'ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_energy':
          'Self-consumed solar energy',
        'ui.panel.lovelace.cards.energy.solar_consumed_gauge.not_produced_solar_energy':
          'You have not produced any solar energy',
        'ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_could_not_calc':
          "Self-consumed solar energy couldn't be calculated",
        'ui.panel.lovelace.cards.energy.grid_neutrality_gauge.energy_dependency':
          'This card indicates your net energy usage.',
        'ui.panel.lovelace.cards.energy.grid_neutrality_gauge.color_explain':
          "If the needle is in the purple, you returned more energy to the grid than you consumed from it. If it's in the blue, you consumed more energy from the grid than you returned.",
        'ui.panel.lovelace.cards.energy.grid_neutrality_gauge.net_returned_grid':
          'Net returned to the grid',
        'ui.panel.lovelace.cards.energy.grid_neutrality_gauge.net_consumed_grid':
          'Net consumed from the grid',
        'ui.panel.lovelace.cards.energy.grid_neutrality_gauge.grid_neutrality_not_calculated':
          'Grid neutrality could not be calculated',
        'ui.panel.lovelace.cards.energy.energy_distribution.title_today':
          'Energy distribution today',
        'ui.panel.lovelace.cards.energy.energy_distribution.grid': 'Grid',
        'ui.panel.lovelace.cards.energy.energy_distribution.gas': 'Gas',
        'ui.panel.lovelace.cards.energy.energy_distribution.solar': 'Solar',
        'ui.panel.lovelace.cards.energy.energy_distribution.non_fossil':
          'Non-fossil',
        'ui.panel.lovelace.cards.energy.energy_distribution.home': 'Home',
        'ui.panel.lovelace.cards.energy.energy_distribution.battery': 'Battery',
        'ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard':
          'Go to the energy dashboard',
        'ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage':
          'Energy usage',
        'ui.panel.lovelace.cards.energy.carbon_consumed_gauge.card_indicates_energy_used':
          'This card indicates how much of the energy consumed by your home was generated using non-fossil fuels like solar, wind and nuclear. The higher, the better!',
        'ui.panel.lovelace.cards.energy.carbon_consumed_gauge.non_fossil_energy_consumed':
          'Non-fossil energy consumed',
        'ui.panel.lovelace.cards.energy.carbon_consumed_gauge.non_fossil_energy_not_calculated':
          "Consumed non-fossil energy couldn't be calculated",
        'ui.panel.lovelace.unused_entities.title': 'Unused entities',
        'ui.panel.lovelace.unused_entities.available_entities':
          'These are the entities that you have available, but are not in your Lovelace UI yet.',
        'ui.panel.lovelace.unused_entities.select_to_add':
          'Select the entities you want to add to a card and then click the add card button.',
        'ui.panel.lovelace.unused_entities.entity': 'Entity',
        'ui.panel.lovelace.unused_entities.entity_id': 'Entity ID',
        'ui.panel.lovelace.unused_entities.domain': 'Domain',
        'ui.panel.lovelace.unused_entities.last_changed': 'Last Changed',
        'ui.panel.lovelace.unused_entities.search': 'Search entities',
        'ui.panel.lovelace.unused_entities.no_data': 'No unused entities found',
        'ui.panel.lovelace.add_entities.yaml_unsupported':
          'You cannot use this function when using Lovelace UI in YAML mode.',
        'ui.panel.lovelace.add_entities.generated_unsupported':
          'You can only use this function when you have taken control of the Lovelace UI.',
        'ui.panel.lovelace.add_entities.saving_failed':
          'Saving Lovelace UI configuration failed.',
        'ui.panel.lovelace.views.confirm_delete': 'Delete view?',
        'ui.panel.lovelace.views.confirm_delete_text':
          "Are you sure you want to delete your ''{name}'' view?",
        'ui.panel.lovelace.views.confirm_delete_existing_cards':
          'Deleting this view will also remove the cards',
        'ui.panel.lovelace.views.confirm_delete_existing_cards_text':
          "Are you sure you want to delete your ''{name}'' view? The view contains {number} cards that will be deleted. This action cannot be undone.",
        'ui.panel.lovelace.menu.configure_ui': 'Edit Dashboard',
        'ui.panel.lovelace.menu.help': 'Help',
        'ui.panel.lovelace.menu.start_conversation': 'Start conversation',
        'ui.panel.lovelace.menu.reload_resources': 'Reload resources',
        'ui.panel.lovelace.menu.exit_edit_mode': 'Exit UI edit mode',
        'ui.panel.lovelace.menu.close': 'Close',
        'ui.panel.lovelace.reload_resources.refresh_header':
          'Do you want to refresh?',
        'ui.panel.lovelace.reload_resources.refresh_body':
          'You have to refresh the page to complete the reload. Do you want to refresh now?',
        'ui.panel.lovelace.editor.header': 'Edit UI',
        'ui.panel.lovelace.editor.menu.open': 'Open Lovelace UI menu',
        'ui.panel.lovelace.editor.menu.raw_editor': 'Raw configuration editor',
        'ui.panel.lovelace.editor.menu.manage_dashboards': 'Manage dashboards',
        'ui.panel.lovelace.editor.menu.manage_resources': 'Manage resources',
        'ui.panel.lovelace.editor.common.edit': 'Edit',
        'ui.panel.lovelace.editor.common.clear': 'Clear',
        'ui.panel.lovelace.editor.common.add': 'Add',
        'ui.panel.lovelace.editor.common.none': 'None',
        'ui.panel.lovelace.editor.raw_editor.header': 'Edit Configuration',
        'ui.panel.lovelace.editor.raw_editor.save': 'Save',
        'ui.panel.lovelace.editor.raw_editor.unsaved_changes':
          'Unsaved changes',
        'ui.panel.lovelace.editor.raw_editor.saved': 'Saved',
        'ui.panel.lovelace.editor.raw_editor.reload': 'Reload',
        'ui.panel.lovelace.editor.raw_editor.lovelace_changed':
          'The Lovelace config was updated, do you want to load the updated config in the editor and lose your current changes?',
        'ui.panel.lovelace.editor.raw_editor.confirm_remove_config_title':
          'Are you sure you want to remove your Lovelace UI configuration?',
        'ui.panel.lovelace.editor.raw_editor.confirm_remove_config_text':
          'We will automatically generate your Lovelace UI views with your areas and devices if you remove your Lovelace UI configuration.',
        'ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes':
          'You have unsaved changes, are you sure you want to exit?',
        'ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments':
          'Your configuration might contains comment(s), these will not be saved. Do you want to continue?',
        'ui.panel.lovelace.editor.raw_editor.error_parse_yaml':
          'Unable to parse YAML: {error}',
        'ui.panel.lovelace.editor.raw_editor.error_invalid_config':
          'Your configuration is not valid: {error}',
        'ui.panel.lovelace.editor.raw_editor.error_save_yaml':
          'Unable to save YAML: {error}',
        'ui.panel.lovelace.editor.raw_editor.error_remove':
          'Unable to remove configuration: {error}',
        'ui.panel.lovelace.editor.raw_editor.resources_moved':
          'Resources should no longer be added to the Lovelace configuration but can be added in the Lovelace config panel.',
        'ui.panel.lovelace.editor.edit_lovelace.header':
          'Title of your Lovelace UI',
        'ui.panel.lovelace.editor.edit_lovelace.explanation':
          'This title is shown above all your views in the Lovelace UI.',
        'ui.panel.lovelace.editor.edit_lovelace.edit_title': 'Edit title',
        'ui.panel.lovelace.editor.edit_lovelace.title': 'Title',
        'ui.panel.lovelace.editor.edit_view.header': 'View Configuration',
        'ui.panel.lovelace.editor.edit_view.header_name':
          '{name} View Configuration',
        'ui.panel.lovelace.editor.edit_view.add': 'Add view',
        'ui.panel.lovelace.editor.edit_view.edit': 'Edit view',
        'ui.panel.lovelace.editor.edit_view.delete': 'Delete view',
        'ui.panel.lovelace.editor.edit_view.move_left': 'Move view left',
        'ui.panel.lovelace.editor.edit_view.move_right': 'Move view right',
        'ui.panel.lovelace.editor.edit_view.tab_settings': 'Settings',
        'ui.panel.lovelace.editor.edit_view.tab_badges': 'Badges',
        'ui.panel.lovelace.editor.edit_view.tab_visibility': 'Visibility',
        'ui.panel.lovelace.editor.edit_view.visibility.select_users':
          'Select which users should see this view in the navigation',
        'ui.panel.lovelace.editor.edit_view.type': 'View type',
        'ui.panel.lovelace.editor.edit_view.types.masonry': 'Masonry (default)',
        'ui.panel.lovelace.editor.edit_view.types.sidebar': 'Sidebar',
        'ui.panel.lovelace.editor.edit_view.types.panel': 'Panel (1 card)',
        'ui.panel.lovelace.editor.edit_badges.view_no_badges':
          'Badges are not be supported by the current view type.',
        'ui.panel.lovelace.editor.edit_card.header': 'Card Configuration',
        'ui.panel.lovelace.editor.edit_card.typed_header':
          '{type} Card Configuration',
        'ui.panel.lovelace.editor.edit_card.pick_card':
          'Which card would you like to add?',
        'ui.panel.lovelace.editor.edit_card.pick_card_view_title':
          'Which card would you like to add to your {name} view?',
        'ui.panel.lovelace.editor.edit_card.toggle_editor': 'Toggle Editor',
        'ui.panel.lovelace.editor.edit_card.unsaved_changes':
          'You have unsaved changes',
        'ui.panel.lovelace.editor.edit_card.confirm_cancel':
          'Are you sure you want to cancel?',
        'ui.panel.lovelace.editor.edit_card.show_visual_editor':
          'Show Visual Editor',
        'ui.panel.lovelace.editor.edit_card.show_code_editor':
          'Show Code Editor',
        'ui.panel.lovelace.editor.edit_card.add': 'Add Card',
        'ui.panel.lovelace.editor.edit_card.edit': 'Edit',
        'ui.panel.lovelace.editor.edit_card.clear': 'Clear',
        'ui.panel.lovelace.editor.edit_card.delete': 'Delete card',
        'ui.panel.lovelace.editor.edit_card.duplicate': 'Duplicate card',
        'ui.panel.lovelace.editor.edit_card.move': 'Move to view',
        'ui.panel.lovelace.editor.edit_card.move_up': 'Move card up',
        'ui.panel.lovelace.editor.edit_card.move_down': 'Move card down',
        'ui.panel.lovelace.editor.edit_card.move_before': 'Move card before',
        'ui.panel.lovelace.editor.edit_card.move_after': 'Move card after',
        'ui.panel.lovelace.editor.edit_card.options': 'More options',
        'ui.panel.lovelace.editor.edit_card.search_cards': 'Search cards',
        'ui.panel.lovelace.editor.move_card.header':
          'Choose a view to move the card to',
        'ui.panel.lovelace.editor.select_view.header': 'Choose a view',
        'ui.panel.lovelace.editor.select_view.dashboard_label': 'Dashboard',
        'ui.panel.lovelace.editor.select_view.views_label': 'View',
        'ui.panel.lovelace.editor.suggest_card.header':
          'We created a suggestion for you',
        'ui.panel.lovelace.editor.suggest_card.create_own':
          'Pick different card',
        'ui.panel.lovelace.editor.suggest_card.add': 'Add to Lovelace UI',
        'ui.panel.lovelace.editor.save_config.header':
          'Take control of your Lovelace UI',
        'ui.panel.lovelace.editor.save_config.para':
          'This dashboard is currently being maintained by Home Assistant. It is automatically updated when new entities or Lovelace UI components become available. If you take control, this dashboard will no longer be automatically updated. You can always create a new dashboard in configuration to play around with.',
        'ui.panel.lovelace.editor.save_config.para_sure':
          'Are you sure you want to take control of your user interface?',
        'ui.panel.lovelace.editor.save_config.yaml_mode':
          "You are using YAML mode for this dashboard, which means you cannot change your Lovelace config from the UI. If you want to manage this dashboard from the UI, remove 'mode: yaml' from your Lovelace configuration in 'configuration.yaml.'.",
        'ui.panel.lovelace.editor.save_config.yaml_control':
          "To take control in YAML mode, create a YAML file with the name you specified in your config for this dashboard, or the default 'ui-lovelace.yaml'.",
        'ui.panel.lovelace.editor.save_config.yaml_config':
          'To help you start here is the current config of this dashboard:',
        'ui.panel.lovelace.editor.save_config.empty_config':
          'Start with an empty dashboard',
        'ui.panel.lovelace.editor.save_config.close': 'Close',
        'ui.panel.lovelace.editor.save_config.save': 'Take control',
        'ui.panel.lovelace.editor.migrate.header': 'Configuration Incompatible',
        'ui.panel.lovelace.editor.migrate.para_no_id':
          "This element doesn't have an ID. Please add an ID to this element in 'ui-lovelace.yaml'.",
        'ui.panel.lovelace.editor.migrate.para_migrate':
          "Home Assistant can add IDs to all your cards and views automatically for you by pressing the 'Migrate configuration' button.",
        'ui.panel.lovelace.editor.migrate.migrate': 'Migrate configuration',
        'ui.panel.lovelace.editor.action-editor.navigation_path':
          'Navigation Path',
        'ui.panel.lovelace.editor.action-editor.url_path': 'URL Path',
        'ui.panel.lovelace.editor.action-editor.actions.default_action':
          'Default Action',
        'ui.panel.lovelace.editor.action-editor.actions.call-service':
          'Call Service',
        'ui.panel.lovelace.editor.action-editor.actions.more-info': 'More Info',
        'ui.panel.lovelace.editor.action-editor.actions.toggle': 'Toggle',
        'ui.panel.lovelace.editor.action-editor.actions.navigate': 'Navigate',
        'ui.panel.lovelace.editor.action-editor.actions.url': 'URL',
        'ui.panel.lovelace.editor.action-editor.actions.none': 'No Action',
        'ui.panel.lovelace.editor.card.alarm-panel.name': 'Alarm Panel',
        'ui.panel.lovelace.editor.card.alarm-panel.available_states':
          'Available States',
        'ui.panel.lovelace.editor.card.alarm-panel.description':
          'The Alarm Panel card allows you to arm and disarm your alarm control panel integrations.',
        'ui.panel.lovelace.editor.card.area.name': 'Area',
        'ui.panel.lovelace.editor.card.area.description':
          'The Area card automatically displays entities of a specific area.',
        'ui.panel.lovelace.editor.card.area.show_camera':
          'Show camera feed instead of area picture',
        'ui.panel.lovelace.editor.card.calendar.name': 'Calendar',
        'ui.panel.lovelace.editor.card.calendar.description':
          'The Calendar card displays a calendar including day, week and list views',
        'ui.panel.lovelace.editor.card.calendar.inital_view': 'Initial View',
        'ui.panel.lovelace.editor.card.calendar.calendar_entities':
          'Calendar Entities',
        'ui.panel.lovelace.editor.card.calendar.views.dayGridMonth': 'Month',
        'ui.panel.lovelace.editor.card.calendar.views.dayGridDay': 'Day',
        'ui.panel.lovelace.editor.card.calendar.views.listWeek': 'List',
        'ui.panel.lovelace.editor.card.conditional.name': 'Conditional',
        'ui.panel.lovelace.editor.card.conditional.description':
          'The Conditional card displays another card based on entity states.',
        'ui.panel.lovelace.editor.card.conditional.conditions': 'Conditions',
        'ui.panel.lovelace.editor.card.conditional.card': 'Card',
        'ui.panel.lovelace.editor.card.conditional.state_equal':
          'State is equal to',
        'ui.panel.lovelace.editor.card.conditional.state_not_equal':
          'State is not equal to',
        'ui.panel.lovelace.editor.card.conditional.current_state': 'current',
        'ui.panel.lovelace.editor.card.conditional.condition_explanation':
          'The card will be shown when ALL conditions below are fulfilled.',
        'ui.panel.lovelace.editor.card.conditional.change_type': 'Change type',
        'ui.panel.lovelace.editor.card.config.required': 'required',
        'ui.panel.lovelace.editor.card.config.optional': 'optional',
        'ui.panel.lovelace.editor.card.entities.name': 'Entities',
        'ui.panel.lovelace.editor.card.entities.show_header_toggle':
          'Show Header Toggle?',
        'ui.panel.lovelace.editor.card.entities.toggle': 'Toggle entities.',
        'ui.panel.lovelace.editor.card.entities.description':
          'The Entities card is the most common type of card. It groups items together into lists.',
        'ui.panel.lovelace.editor.card.entities.special_row': 'special row',
        'ui.panel.lovelace.editor.card.entities.edit_special_row':
          'View the details of this row by clicking the edit button',
        'ui.panel.lovelace.editor.card.entities.entity_row_editor':
          'Entity Row Editor',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.none':
          'No Secondary Info',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.entity-id':
          'Entity ID',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.last-changed':
          'Last Changed',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.last-triggered':
          'Last Triggered',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.position':
          'Position',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.tilt-position':
          'Tilt Position',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.brightness':
          'Brightness',
        'ui.panel.lovelace.editor.card.entities.secondary_info_values.last-updated':
          'Last Updated',
        'ui.panel.lovelace.editor.card.entities.entity_row.divider': 'Divider',
        'ui.panel.lovelace.editor.card.entities.entity_row.call-service':
          'Call Service',
        'ui.panel.lovelace.editor.card.entities.entity_row.section': 'Section',
        'ui.panel.lovelace.editor.card.entities.entity_row.weblink': 'Web Link',
        'ui.panel.lovelace.editor.card.entities.entity_row.attribute':
          'Attribute',
        'ui.panel.lovelace.editor.card.entities.entity_row.buttons': 'Buttons',
        'ui.panel.lovelace.editor.card.entities.entity_row.conditional':
          'Conditional',
        'ui.panel.lovelace.editor.card.entities.entity_row.cast': 'Cast',
        'ui.panel.lovelace.editor.card.entities.entity_row.button': 'Button',
        'ui.panel.lovelace.editor.card.entity.name': 'Entity',
        'ui.panel.lovelace.editor.card.entity.description':
          'The Entity card gives you a quick overview of your entity’s state.',
        'ui.panel.lovelace.editor.card.button.name': 'Button',
        'ui.panel.lovelace.editor.card.button.description':
          'The Button card allows you to add buttons to perform tasks.',
        'ui.panel.lovelace.editor.card.button.default_action_help':
          "The default action depends on the entity's capabilities, it will either be toggled or the more info dialog will be shown.",
        'ui.panel.lovelace.editor.card.entity-filter.name': 'Entity Filter',
        'ui.panel.lovelace.editor.card.entity-filter.description':
          'The Entity Filter card allows you to define a list of entities that you want to track only when in a certain state.',
        'ui.panel.lovelace.editor.card.gauge.name': 'Gauge',
        'ui.panel.lovelace.editor.card.gauge.needle_gauge':
          'Display as needle gauge?',
        'ui.panel.lovelace.editor.card.gauge.severity.define':
          'Define Severity?',
        'ui.panel.lovelace.editor.card.gauge.severity.green': 'Green',
        'ui.panel.lovelace.editor.card.gauge.severity.red': 'Red',
        'ui.panel.lovelace.editor.card.gauge.severity.yellow': 'Yellow',
        'ui.panel.lovelace.editor.card.gauge.description':
          'The Gauge card is a basic card that allows visually seeing sensor data.',
        'ui.panel.lovelace.editor.card.glance.name': 'Glance',
        'ui.panel.lovelace.editor.card.glance.columns': 'Columns',
        'ui.panel.lovelace.editor.card.glance.description':
          'The Glance card is useful to group multiple sensors in a compact overview.',
        'ui.panel.lovelace.editor.card.grid.name': 'Grid',
        'ui.panel.lovelace.editor.card.grid.description':
          'The Grid card allows you to show multiple cards in a grid.',
        'ui.panel.lovelace.editor.card.grid.columns': 'Columns',
        'ui.panel.lovelace.editor.card.grid.square': 'Render cards as squares',
        'ui.panel.lovelace.editor.card.logbook.name': 'Logbook',
        'ui.panel.lovelace.editor.card.logbook.description':
          'The Logbook card shows a list of events for entities.',
        'ui.panel.lovelace.editor.card.history-graph.name': 'History Graph',
        'ui.panel.lovelace.editor.card.history-graph.description':
          'The History Graph card allows you to display a graph for each of the entities listed.',
        'ui.panel.lovelace.editor.card.statistics-graph.name':
          'Statistics Graph',
        'ui.panel.lovelace.editor.card.statistics-graph.description':
          'The Statistics Graph card allows you to display a graph of the statistics for each of the entities listed.',
        'ui.panel.lovelace.editor.card.horizontal-stack.name':
          'Horizontal Stack',
        'ui.panel.lovelace.editor.card.horizontal-stack.description':
          'The Horizontal Stack card allows you to stack together multiple cards, so they always sit next to each other in the space of one column.',
        'ui.panel.lovelace.editor.card.humidifier.name': 'Humidifier',
        'ui.panel.lovelace.editor.card.humidifier.description':
          'The Humidifier card gives control of your humidifier entity. Allowing you to change the humidity and mode of the entity.',
        'ui.panel.lovelace.editor.card.iframe.name': 'Webpage',
        'ui.panel.lovelace.editor.card.iframe.description':
          'The Webpage card allows you to embed your favorite webpage right into Home Assistant.',
        'ui.panel.lovelace.editor.card.light.name': 'Light',
        'ui.panel.lovelace.editor.card.light.description':
          'The Light card allows you to change the brightness of the light.',
        'ui.panel.lovelace.editor.card.generic.aspect_ratio': 'Aspect Ratio',
        'ui.panel.lovelace.editor.card.generic.attribute': 'Attribute',
        'ui.panel.lovelace.editor.card.generic.camera_image': 'Camera Entity',
        'ui.panel.lovelace.editor.card.generic.camera_view': 'Camera View',
        'ui.panel.lovelace.editor.card.generic.double_tap_action':
          'Double Tap Action',
        'ui.panel.lovelace.editor.card.generic.entities': 'Entities',
        'ui.panel.lovelace.editor.card.generic.entity': 'Entity',
        'ui.panel.lovelace.editor.card.generic.hold_action': 'Hold Action',
        'ui.panel.lovelace.editor.card.generic.hours_to_show': 'Hours to Show',
        'ui.panel.lovelace.editor.card.generic.days_to_show': 'Days to Show',
        'ui.panel.lovelace.editor.card.generic.icon': 'Icon',
        'ui.panel.lovelace.editor.card.generic.icon_height': 'Icon Height',
        'ui.panel.lovelace.editor.card.generic.image': 'Image Path',
        'ui.panel.lovelace.editor.card.generic.maximum': 'Maximum',
        'ui.panel.lovelace.editor.card.generic.manual': 'Manual',
        'ui.panel.lovelace.editor.card.generic.manual_description':
          'Need to add a custom card or just want to manually write the YAML?',
        'ui.panel.lovelace.editor.card.generic.minimum': 'Minimum',
        'ui.panel.lovelace.editor.card.generic.name': 'Name',
        'ui.panel.lovelace.editor.card.generic.refresh_interval':
          'Refresh Interval',
        'ui.panel.lovelace.editor.card.generic.show_icon': 'Show Icon?',
        'ui.panel.lovelace.editor.card.generic.show_name': 'Show Name?',
        'ui.panel.lovelace.editor.card.generic.show_state': 'Show State?',
        'ui.panel.lovelace.editor.card.generic.tap_action': 'Tap Action',
        'ui.panel.lovelace.editor.card.generic.title': 'Title',
        'ui.panel.lovelace.editor.card.generic.theme': 'Theme',
        'ui.panel.lovelace.editor.card.generic.no_theme': 'No theme',
        'ui.panel.lovelace.editor.card.generic.unit': 'Unit',
        'ui.panel.lovelace.editor.card.generic.url': 'URL',
        'ui.panel.lovelace.editor.card.generic.state': 'State',
        'ui.panel.lovelace.editor.card.generic.secondary_info_attribute':
          'Secondary Info Attribute',
        'ui.panel.lovelace.editor.card.generic.search': 'Search',
        'ui.panel.lovelace.editor.card.generic.state_color':
          'Color icons based on state?',
        'ui.panel.lovelace.editor.card.map.name': 'Map',
        'ui.panel.lovelace.editor.card.map.geo_location_sources':
          'Geolocation Sources',
        'ui.panel.lovelace.editor.card.map.dark_mode': 'Dark Mode?',
        'ui.panel.lovelace.editor.card.map.default_zoom': 'Default Zoom',
        'ui.panel.lovelace.editor.card.map.hours_to_show': 'Hours to Show',
        'ui.panel.lovelace.editor.card.map.source': 'Source',
        'ui.panel.lovelace.editor.card.map.description':
          'The Map card that allows you to display entities on a map.',
        'ui.panel.lovelace.editor.card.markdown.name': 'Markdown',
        'ui.panel.lovelace.editor.card.markdown.content': 'Content',
        'ui.panel.lovelace.editor.card.markdown.description':
          'The Markdown card is used to render Markdown.',
        'ui.panel.lovelace.editor.card.media-control.name': 'Media Control',
        'ui.panel.lovelace.editor.card.media-control.description':
          'The Media Control card is used to display media player entities on an interface with easy to use controls.',
        'ui.panel.lovelace.editor.card.picture.name': 'Picture',
        'ui.panel.lovelace.editor.card.picture.description':
          'The Picture card allows you to set an image to use for navigation to various paths in your interface or to call a service.',
        'ui.panel.lovelace.editor.card.picture-elements.name':
          'Picture Elements',
        'ui.panel.lovelace.editor.card.picture-elements.description':
          'The Picture Elements card is one of the most versatile types of cards. The cards allow you to position icons or text and even services! On an image based on coordinates.',
        'ui.panel.lovelace.editor.card.picture-entity.name': 'Picture Entity',
        'ui.panel.lovelace.editor.card.picture-entity.description':
          'The Picture Entity card displays an entity in the form of an image. Instead of images from URL, it can also show the picture of camera entities.',
        'ui.panel.lovelace.editor.card.picture-glance.name': 'Picture Glance',
        'ui.panel.lovelace.editor.card.picture-glance.description':
          'The Picture Glance card shows an image and corresponding entity states as an icon. The entities on the right side allow toggle actions, others show the more info dialog.',
        'ui.panel.lovelace.editor.card.picture-glance.state_entity':
          'State Entity',
        'ui.panel.lovelace.editor.card.plant-status.name': 'Plant Status',
        'ui.panel.lovelace.editor.card.plant-status.description':
          'The Plant Status card is for all the lovely botanists out there.',
        'ui.panel.lovelace.editor.card.sensor.name': 'Sensor',
        'ui.panel.lovelace.editor.card.sensor.show_more_detail':
          'Show more detail',
        'ui.panel.lovelace.editor.card.sensor.graph_type': 'Graph Type',
        'ui.panel.lovelace.editor.card.sensor.description':
          'The Sensor card gives you a quick overview of your sensors state with an optional graph to visualize change over time.',
        'ui.panel.lovelace.editor.card.shopping-list.name': 'Shopping List',
        'ui.panel.lovelace.editor.card.shopping-list.description':
          'The Shopping List card allows you to add, edit, check-off, and clear items from your shopping list.',
        'ui.panel.lovelace.editor.card.shopping-list.integration_not_loaded':
          'This card requires the `shopping_list` integration to be set up.',
        'ui.panel.lovelace.editor.card.thermostat.name': 'Thermostat',
        'ui.panel.lovelace.editor.card.thermostat.description':
          'The Thermostat card gives control of your climate entity. Allowing you to change the temperature and mode of the entity.',
        'ui.panel.lovelace.editor.card.vertical-stack.name': 'Vertical Stack',
        'ui.panel.lovelace.editor.card.vertical-stack.description':
          'The Vertical Stack card allows you to group multiple cards so they always sit in the same column.',
        'ui.panel.lovelace.editor.card.weather-forecast.name':
          'Weather Forecast',
        'ui.panel.lovelace.editor.card.weather-forecast.description':
          'The Weather Forecast card displays the weather. Very useful to include on interfaces that people display on the wall.',
        'ui.panel.lovelace.editor.card.weather-forecast.show_both':
          'Show current Weather and Forecast',
        'ui.panel.lovelace.editor.card.weather-forecast.show_only_current':
          'Show only current Weather',
        'ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast':
          'Show only Forecast',
        'ui.panel.lovelace.editor.view.panel_mode.warning_multiple_cards':
          'This view contains more than one card, but a panel view can only show 1 card.',
        'ui.panel.lovelace.editor.cardpicker.no_description':
          'No description available.',
        'ui.panel.lovelace.editor.cardpicker.custom_card': 'Custom',
        'ui.panel.lovelace.editor.cardpicker.domain': 'Domain',
        'ui.panel.lovelace.editor.cardpicker.entity': 'Entity',
        'ui.panel.lovelace.editor.cardpicker.by_entity': 'By Entity',
        'ui.panel.lovelace.editor.cardpicker.by_card': 'By Card',
        'ui.panel.lovelace.editor.header-footer.header': 'Header',
        'ui.panel.lovelace.editor.header-footer.footer': 'Footer',
        'ui.panel.lovelace.editor.header-footer.choose_header_footer':
          'Choose a {type}',
        'ui.panel.lovelace.editor.header-footer.types.graph.name': 'Graph',
        'ui.panel.lovelace.editor.header-footer.types.picture.name': 'Picture',
        'ui.panel.lovelace.editor.header-footer.types.buttons.name': 'Buttons',
        'ui.panel.lovelace.editor.sub-element-editor.types.header':
          'Header Editor',
        'ui.panel.lovelace.editor.sub-element-editor.types.footer':
          'Footer Editor',
        'ui.panel.lovelace.editor.sub-element-editor.types.row':
          'Entity Row Editor',
        'ui.panel.lovelace.warning.attribute_not_found':
          'Attribute {attribute} not available in: {entity}',
        'ui.panel.lovelace.warning.entity_not_found':
          'Entity not available: {entity}',
        'ui.panel.lovelace.warning.entity_non_numeric':
          'Entity is non-numeric: {entity}',
        'ui.panel.lovelace.warning.entity_unavailable':
          'Entity is currently unavailable: {entity}',
        'ui.panel.lovelace.warning.starting':
          'Home Assistant is starting, not everything may be available yet',
        'ui.panel.lovelace.changed_toast.message':
          'The Lovelace UI configuration for this dashboard was updated. Refresh to see changes?',
        'ui.panel.lovelace.components.timestamp-display.invalid':
          'Invalid timestamp',
        'ui.panel.lovelace.components.timestamp-display.invalid_format':
          'Invalid display format',
        'ui.panel.lovelace.components.energy_period_selector.today': 'Today',
        'ui.panel.lovelace.components.energy_period_selector.day': 'Day',
        'ui.panel.lovelace.components.energy_period_selector.week': 'Week',
        'ui.panel.lovelace.components.energy_period_selector.month': 'Month',
        'ui.panel.lovelace.components.energy_period_selector.year': 'Year',
        'ui.panel.lovelace.components.energy_period_selector.previous':
          'Previous',
        'ui.panel.lovelace.components.energy_period_selector.next': 'Next',
        'ui.panel.lovelace.reload_lovelace': 'Reload UI',
        'ui.panel.energy.setup.next': 'Next',
        'ui.panel.energy.setup.back': 'Back',
        'ui.panel.energy.setup.done': 'Show me my energy dashboard!',
        'ui.panel.energy.charts.stat_house_energy_meter':
          'Total energy consumption',
        'ui.panel.energy.charts.solar': 'Solar',
        'ui.panel.energy.charts.by_device': 'Consumption by device',
        'ui.panel.energy.cards.energy_usage_graph_title': 'Energy usage',
        'ui.panel.energy.cards.energy_solar_graph_title': 'Solar production',
        'ui.panel.energy.cards.energy_gas_graph_title': 'Gas consumption',
        'ui.panel.energy.cards.energy_distribution_title':
          'Energy distribution',
        'ui.panel.energy.cards.energy_sources_table_title': 'Sources',
        'ui.panel.energy.cards.energy_devices_graph_title':
          'Monitor individual devices',
        'ui.panel.config.header': 'Configure Home Assistant',
        'ui.panel.config.dashboard.devices.title': 'Devices & Services',
        'ui.panel.config.dashboard.devices.description':
          'Integrations, devices, entities and areas',
        'ui.panel.config.dashboard.automations.title': 'Automations & Scenes',
        'ui.panel.config.dashboard.automations.description':
          'Manage automations, scenes, scripts and helpers',
        'ui.panel.config.dashboard.blueprints.title': 'Blueprints',
        'ui.panel.config.dashboard.blueprints.description':
          'Pre-made automations and scripts by the community',
        'ui.panel.config.dashboard.supervisor.title':
          'Add-ons, Backups & Supervisor',
        'ui.panel.config.dashboard.supervisor.description':
          'Create backups, check logs or reboot your system',
        'ui.panel.config.dashboard.dashboards.title': 'Dashboards',
        'ui.panel.config.dashboard.dashboards.description':
          'Create customized sets of cards to control your home',
        'ui.panel.config.dashboard.energy.title': 'Energy',
        'ui.panel.config.dashboard.energy.description':
          'Monitor your energy production and consumption',
        'ui.panel.config.dashboard.tags.title': 'Tags',
        'ui.panel.config.dashboard.tags.description':
          'Trigger automations when a NFC tag, QR code, etc. is scanned',
        'ui.panel.config.dashboard.people.title': 'People & Zones',
        'ui.panel.config.dashboard.people.description':
          'Manage the people and zones that Home Assistant tracks',
        'ui.panel.config.dashboard.companion.title': 'Companion App',
        'ui.panel.config.dashboard.companion.description':
          'Location and notifications',
        'ui.panel.config.dashboard.settings.title': 'Settings',
        'ui.panel.config.dashboard.settings.description':
          'Basic settings, server controls, logs and info',
        'ui.panel.config.common.editor.confirm_unsaved':
          'You have unsaved changes. Are you sure you want to leave?',
        'ui.panel.config.common.learn_more': 'Learn more',
        'ui.panel.config.updates.title':
          '{count} {count, plural,\n  one {update}\n  other {updates}\n}',
        'ui.panel.config.updates.unable_to_fetch': 'Unable to load updates',
        'ui.panel.config.updates.version_available':
          'Version {version_available} is available',
        'ui.panel.config.updates.more_updates': '+ {count} Updates',
        'ui.panel.config.updates.show': 'show',
        'ui.panel.config.areas.caption': 'Areas',
        'ui.panel.config.areas.description':
          'Group devices and entities into areas',
        'ui.panel.config.areas.edit_settings': 'Area settings',
        'ui.panel.config.areas.add_picture': 'Add a picture',
        'ui.panel.config.areas.data_table.area': 'Area',
        'ui.panel.config.areas.data_table.devices': 'Devices',
        'ui.panel.config.areas.data_table.entities': 'Entities',
        'ui.panel.config.areas.picker.header': 'Areas',
        'ui.panel.config.areas.picker.introduction':
          'Areas are used to organize where devices are. This information will be used throughout Home Assistant to help you in organizing your interface, permissions and integrations with other systems.',
        'ui.panel.config.areas.picker.introduction2':
          'To place devices in an area, use the link below to navigate to the integrations page and then click on a configured integration to get to the device cards.',
        'ui.panel.config.areas.picker.integrations_page': 'Integrations page',
        'ui.panel.config.areas.picker.no_areas':
          'Looks like you have no areas yet!',
        'ui.panel.config.areas.picker.create_area': 'Create Area',
        'ui.panel.config.areas.editor.default_name': 'New Area',
        'ui.panel.config.areas.editor.delete': 'Delete',
        'ui.panel.config.areas.editor.update': 'Update',
        'ui.panel.config.areas.editor.create': 'Create',
        'ui.panel.config.areas.editor.name': 'Name',
        'ui.panel.config.areas.editor.name_required': 'Name is required',
        'ui.panel.config.areas.editor.area_id': 'Area ID',
        'ui.panel.config.areas.editor.unknown_error': 'Unknown error',
        'ui.panel.config.areas.editor.linked_entities_caption': 'Entities',
        'ui.panel.config.areas.editor.no_linked_entities':
          'There are no entities linked to this area.',
        'ui.panel.config.areas.delete.confirmation_title':
          'Are you sure you want to delete this area?',
        'ui.panel.config.areas.delete.confirmation_text':
          'All devices in this area will become unassigned.',
        'ui.panel.config.tag.caption': 'Tags',
        'ui.panel.config.tag.description':
          'Trigger automations when a NFC tag, QR code, etc. is scanned',
        'ui.panel.config.tag.learn_more': 'Learn more about tags',
        'ui.panel.config.tag.no_tags': 'No tags',
        'ui.panel.config.tag.add_tag': 'Add tag',
        'ui.panel.config.tag.write': 'Write',
        'ui.panel.config.tag.edit': 'Edit',
        'ui.panel.config.tag.never_scanned': 'Never scanned',
        'ui.panel.config.tag.create_automation': 'Create automation with tag',
        'ui.panel.config.tag.confirm_remove_title': 'Remove tag?',
        'ui.panel.config.tag.confirm_remove':
          'Are you sure you want to remove tag {tag}?',
        'ui.panel.config.tag.automation_title': 'Tag {name} is scanned',
        'ui.panel.config.tag.headers.name': 'Name',
        'ui.panel.config.tag.headers.last_scanned': 'Last scanned',
        'ui.panel.config.tag.detail.new_tag': 'New tag',
        'ui.panel.config.tag.detail.name': 'Name',
        'ui.panel.config.tag.detail.description': 'Description',
        'ui.panel.config.tag.detail.tag_id': 'Tag ID',
        'ui.panel.config.tag.detail.tag_id_placeholder':
          'Autogenerated when left empty',
        'ui.panel.config.tag.detail.delete': 'Delete',
        'ui.panel.config.tag.detail.update': 'Update',
        'ui.panel.config.tag.detail.create': 'Create',
        'ui.panel.config.tag.detail.create_and_write': 'Create and Write',
        'ui.panel.config.tag.detail.usage':
          'A tag can trigger an automation when scanned, you can use NFC tags, QR codes or any other kind of tag. Use our {companion_link} to write this tag to a programmable NFC tag or create a QR code below.',
        'ui.panel.config.tag.detail.companion_apps': 'companion apps',
        'ui.panel.config.energy.caption': 'Energy',
        'ui.panel.config.energy.description':
          'Monitor your energy production and consumption',
        'ui.panel.config.energy.new_device_info':
          'After setting up a new device, it can take up to 2 hours for new data to arrive in your energy dashboard.',
        'ui.panel.config.energy.delete_source':
          'Are you sure you want to delete this source?',
        'ui.panel.config.energy.delete_integration':
          'Are you sure you want to delete this integration? It will remove the entities it provides',
        'ui.panel.config.energy.grid.title': 'Electricity grid',
        'ui.panel.config.energy.grid.sub':
          'Configure the amount of energy that you consume from the grid and, if you produce energy, give back to the grid. This allows Home Assistant to track your whole home energy usage.',
        'ui.panel.config.energy.grid.learn_more':
          'More information on how to get started.',
        'ui.panel.config.energy.grid.grid_consumption': 'Grid consumption',
        'ui.panel.config.energy.grid.add_consumption': 'Add consumption',
        'ui.panel.config.energy.grid.return_to_grid': 'Return to grid',
        'ui.panel.config.energy.grid.add_return': 'Add return',
        'ui.panel.config.energy.grid.grid_carbon_footprint':
          'Grid carbon footprint',
        'ui.panel.config.energy.grid.add_co2_signal':
          'Add CO2 signal integration',
        'ui.panel.config.energy.grid.flow_dialog.from.header':
          'Configure grid consumption',
        'ui.panel.config.energy.grid.flow_dialog.from.paragraph':
          'Grid consumption is the energy that flows from the energy grid to your home.',
        'ui.panel.config.energy.grid.flow_dialog.from.energy_stat':
          'Consumed Energy (kWh)',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_para':
          'Select how Home Assistant should keep track of the costs of the consumed energy.',
        'ui.panel.config.energy.grid.flow_dialog.from.no_cost':
          'Do not track costs',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_stat':
          'Use an entity tracking the total costs',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_stat_input':
          'Total Costs Entity',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_entity':
          'Use an entity with current price',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_entity_input':
          'Entity with the current price',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_number':
          'Use a static price',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_number_input':
          'Price per kWh',
        'ui.panel.config.energy.grid.flow_dialog.from.cost_number_suffix':
          '{currency}/kWh',
        'ui.panel.config.energy.grid.flow_dialog.to.header':
          'Configure grid production',
        'ui.panel.config.energy.grid.flow_dialog.to.paragraph':
          'Grid production is the energy that flows from your solar panels to the grid.',
        'ui.panel.config.energy.grid.flow_dialog.to.energy_stat':
          'Energy returned to the grid (kWh)',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_para':
          'Do you get money back when you return energy to the grid?',
        'ui.panel.config.energy.grid.flow_dialog.to.no_cost':
          'I do not get money back',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_stat':
          'Use an entity tracking the total recieved money',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_stat_input':
          'Total Compensation Entity',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_entity':
          'Use an entity with current rate',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_entity_input':
          'Entity with the current rate',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_number':
          'Use a static rate',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_number_input':
          'Rate per kWh',
        'ui.panel.config.energy.grid.flow_dialog.to.cost_number_suffix':
          '{currency}/kWh',
        'ui.panel.config.energy.solar.title': 'Solar Panels',
        'ui.panel.config.energy.solar.sub':
          'Let Home Assistant monitor your solar panels and give you insight on their performance.',
        'ui.panel.config.energy.solar.learn_more':
          'More information on how to get started.',
        'ui.panel.config.energy.solar.solar_production': 'Solar production',
        'ui.panel.config.energy.solar.add_solar_production':
          'Add solar production',
        'ui.panel.config.energy.solar.stat_production':
          'Your solar energy production',
        'ui.panel.config.energy.solar.stat_return_to_grid':
          'Solar energy returned to the grid',
        'ui.panel.config.energy.solar.stat_predicted_production':
          'Prediction of your solar energy production',
        'ui.panel.config.energy.solar.dialog.header': 'Configure solar panels',
        'ui.panel.config.energy.solar.dialog.solar_production_energy':
          'Solar production energy (kWh)',
        'ui.panel.config.energy.solar.dialog.solar_production_forecast':
          'Solar production forecast',
        'ui.panel.config.energy.solar.dialog.solar_production_forecast_description':
          'Adding solar production forecast information will allow you to quickly see your expected production for today.',
        'ui.panel.config.energy.solar.dialog.dont_forecast_production':
          "Don't forecast production",
        'ui.panel.config.energy.solar.dialog.forecast_production':
          'Forecast Production',
        'ui.panel.config.energy.solar.dialog.add_forecast': 'Add forecast',
        'ui.panel.config.energy.battery.title': 'Home Battery Storage',
        'ui.panel.config.energy.battery.sub':
          'If you have a battery system, you can configure it to monitor how much energy was stored and used from your battery.',
        'ui.panel.config.energy.battery.learn_more':
          'More information on how to get started.',
        'ui.panel.config.energy.battery.battery_systems': 'Battery systems',
        'ui.panel.config.energy.battery.add_battery_system':
          'Add battery system',
        'ui.panel.config.energy.battery.dialog.header':
          'Configure battery system',
        'ui.panel.config.energy.battery.dialog.energy_into_battery':
          'Energy going in to the battery (kWh)',
        'ui.panel.config.energy.battery.dialog.energy_out_of_battery':
          'Energy coming out of the battery (kWh)',
        'ui.panel.config.energy.gas.title': 'Gas Consumption',
        'ui.panel.config.energy.gas.sub':
          'Let Home Assistant monitor your gas usage.',
        'ui.panel.config.energy.gas.learn_more':
          'More information on how to get started.',
        'ui.panel.config.energy.gas.gas_consumption': 'Gas consumption',
        'ui.panel.config.energy.gas.add_gas_source': 'Add gas source',
        'ui.panel.config.energy.gas.dialog.header': 'Configure gas consumption',
        'ui.panel.config.energy.gas.dialog.paragraph':
          'Gas consumption is the volume of gas that flows to your home.',
        'ui.panel.config.energy.gas.dialog.energy_stat': 'Consumed Energy (m³)',
        'ui.panel.config.energy.gas.dialog.cost_para':
          'Select how Home Assistant should keep track of the costs of the consumed energy.',
        'ui.panel.config.energy.gas.dialog.no_cost': 'Do not track costs',
        'ui.panel.config.energy.gas.dialog.cost_stat':
          'Use an entity tracking the total costs',
        'ui.panel.config.energy.gas.dialog.cost_stat_input':
          'Total Costs Entity',
        'ui.panel.config.energy.gas.dialog.cost_entity':
          'Use an entity with current price',
        'ui.panel.config.energy.gas.dialog.cost_entity_input':
          'Entity with the current price per {unit}',
        'ui.panel.config.energy.gas.dialog.cost_number': 'Use a static price',
        'ui.panel.config.energy.gas.dialog.cost_number_input':
          'Price per {unit}',
        'ui.panel.config.energy.gas.dialog.gas_usage': 'Gas usage',
        'ui.panel.config.energy.gas.dialog.m3_or_kWh':
          'ft³, m³, Wh, kWh or MWh',
        'ui.panel.config.energy.device_consumption.title': 'Individual devices',
        'ui.panel.config.energy.device_consumption.sub':
          'Tracking the energy usage of individual devices allows Home Assistant to break down your energy usage by device.',
        'ui.panel.config.energy.device_consumption.learn_more':
          'More information on how to get started.',
        'ui.panel.config.energy.device_consumption.add_stat':
          'Pick entity to track energy of',
        'ui.panel.config.energy.device_consumption.selected_stat':
          'Tracking energy for',
        'ui.panel.config.energy.device_consumption.devices': 'Devices',
        'ui.panel.config.energy.device_consumption.add_device': 'Add device',
        'ui.panel.config.energy.device_consumption.dialog.header':
          'Add a device',
        'ui.panel.config.energy.device_consumption.dialog.device_consumption_energy':
          'Device consumption energy (kWh)',
        'ui.panel.config.energy.device_consumption.dialog.selected_stat_intro':
          'Select the entity that represents the device energy usage.',
        'ui.panel.config.energy.validation.issues.entity_not_defined.title':
          'Entity not defined',
        'ui.panel.config.energy.validation.issues.entity_not_defined.description':
          'Check the integration or your configuration that provides:',
        'ui.panel.config.energy.validation.issues.recorder_untracked.title':
          'Entity not tracked',
        'ui.panel.config.energy.validation.issues.recorder_untracked.description':
          'The recorder has been configured to exclude these configured entities:',
        'ui.panel.config.energy.validation.issues.entity_unavailable.title':
          'Entity unavailable',
        'ui.panel.config.energy.validation.issues.entity_unavailable.description':
          'The state of these configured entities are currently not available:',
        'ui.panel.config.energy.validation.issues.entity_state_non_numeric.title':
          'Entity has non-numeric state',
        'ui.panel.config.energy.validation.issues.entity_state_non_numeric.description':
          'The following entities have a state that cannot be parsed as a number:',
        'ui.panel.config.energy.validation.issues.entity_negative_state.title':
          'Entity has a negative state',
        'ui.panel.config.energy.validation.issues.entity_negative_state.description':
          'The following entities have a negative state while a positive state is expected:',
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy.title':
          'Unexpected unit of measurement',
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy.description':
          "The following entities do not have the expected units of measurement 'Wh', 'kWh' or 'MWh':",
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas.title':
          'Unexpected unit of measurement',
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas.description':
          "The following entities do not have the expected units of measurement 'Wh', 'kWh' or 'MWh' for an energy sensor or 'm³' or 'ft³' for a gas sensor:",
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy_price.title':
          'Unexpected unit of measurement',
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_energy_price.description':
          "The following entities do not have the expected units of measurement ''{currency}/kWh'', ''{currency}/Wh'' or ''{currency}/MWh'':",
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas_price.title':
          'Unexpected unit of measurement',
        'ui.panel.config.energy.validation.issues.entity_unexpected_unit_gas_price.description':
          "The following entities do not have the expected units of measurement ''{currency}/kWh'', ''{currency}/Wh'', ''{currency}/MWh'', ''{currency}/m³'' or ''{currency}/ft³'':",
        'ui.panel.config.energy.validation.issues.entity_unexpected_state_class.title':
          'Unexpected state class',
        'ui.panel.config.energy.validation.issues.entity_unexpected_state_class.description':
          'The following entities do not have the expected state class:',
        'ui.panel.config.energy.validation.issues.entity_unexpected_device_class.title':
          'Unexpected device class',
        'ui.panel.config.energy.validation.issues.entity_unexpected_device_class.description':
          'The following entities do not have the expected device class:',
        'ui.panel.config.energy.validation.issues.entity_state_class_measurement_no_last_reset.title':
          'Last reset missing',
        'ui.panel.config.energy.validation.issues.entity_state_class_measurement_no_last_reset.description':
          "The following entities have state class 'measurement' but 'last_reset' is missing:",
        'ui.panel.config.helpers.caption': 'Helpers',
        'ui.panel.config.helpers.description':
          'Elements that help build automations',
        'ui.panel.config.helpers.types.input_text': 'Text',
        'ui.panel.config.helpers.types.input_number': 'Number',
        'ui.panel.config.helpers.types.input_select': 'Dropdown',
        'ui.panel.config.helpers.types.input_boolean': 'Toggle',
        'ui.panel.config.helpers.types.input_datetime': 'Date and/or time',
        'ui.panel.config.helpers.types.counter': 'Counter',
        'ui.panel.config.helpers.types.timer': 'Timer',
        'ui.panel.config.helpers.picker.headers.name': 'Name',
        'ui.panel.config.helpers.picker.headers.entity_id': 'Entity ID',
        'ui.panel.config.helpers.picker.headers.type': 'Type',
        'ui.panel.config.helpers.picker.headers.editable': 'Editable',
        'ui.panel.config.helpers.picker.add_helper': 'Add helper',
        'ui.panel.config.helpers.picker.no_helpers':
          "Looks like you don't have any helpers yet!",
        'ui.panel.config.helpers.dialog.create': 'Create',
        'ui.panel.config.helpers.dialog.add_helper': 'Add helper',
        'ui.panel.config.helpers.dialog.add_platform': 'Add {platform}',
        'ui.panel.config.core.caption': 'General',
        'ui.panel.config.core.description': 'Location, network and analytics',
        'ui.panel.config.core.section.core.header': 'General Configuration',
        'ui.panel.config.core.section.core.introduction':
          'Manage your location, network and analytics.',
        'ui.panel.config.core.section.core.core_config.edit_requires_storage':
          'Editor disabled because config stored in configuration.yaml.',
        'ui.panel.config.core.section.core.core_config.location_name':
          'Name of your Home Assistant installation',
        'ui.panel.config.core.section.core.core_config.latitude': 'Latitude',
        'ui.panel.config.core.section.core.core_config.longitude': 'Longitude',
        'ui.panel.config.core.section.core.core_config.elevation': 'Elevation',
        'ui.panel.config.core.section.core.core_config.elevation_meters':
          'meters',
        'ui.panel.config.core.section.core.core_config.time_zone': 'Time Zone',
        'ui.panel.config.core.section.core.core_config.unit_system':
          'Unit System',
        'ui.panel.config.core.section.core.core_config.unit_system_imperial':
          'Imperial',
        'ui.panel.config.core.section.core.core_config.unit_system_metric':
          'Metric',
        'ui.panel.config.core.section.core.core_config.imperial_example':
          'Fahrenheit, pounds',
        'ui.panel.config.core.section.core.core_config.metric_example':
          'Celsius, kilograms',
        'ui.panel.config.core.section.core.core_config.find_currency_value':
          'Find your value',
        'ui.panel.config.core.section.core.core_config.save_button': 'Save',
        'ui.panel.config.core.section.core.core_config.external_url':
          'External URL',
        'ui.panel.config.core.section.core.core_config.internal_url':
          'Internal URL',
        'ui.panel.config.core.section.core.core_config.currency': 'Currency',
        'ui.panel.config.info.caption': 'Info',
        'ui.panel.config.info.copy_menu': 'Copy menu',
        'ui.panel.config.info.copy_raw': 'Raw Text',
        'ui.panel.config.info.copy_github': 'For GitHub',
        'ui.panel.config.info.description':
          'Version, system health and links to documentation',
        'ui.panel.config.info.home_assistant_logo': 'Home Assistant logo',
        'ui.panel.config.info.path_configuration':
          'Path to configuration.yaml: {path}',
        'ui.panel.config.info.developed_by':
          'Developed by a bunch of awesome people.',
        'ui.panel.config.info.license':
          'Published under the Apache 2.0 license',
        'ui.panel.config.info.source': 'Source:',
        'ui.panel.config.info.server': 'server',
        'ui.panel.config.info.frontend': 'frontend-ui',
        'ui.panel.config.info.built_using': 'Built using',
        'ui.panel.config.info.icons_by': 'Icons by',
        'ui.panel.config.info.frontend_version':
          'Frontend version: {version} - {type}',
        'ui.panel.config.info.custom_uis': 'Custom UIs:',
        'ui.panel.config.info.system_health_error':
          "System Health component is not loaded. Add 'system_health:' to configuration.yaml",
        'ui.panel.config.info.integrations': 'Integrations',
        'ui.panel.config.info.documentation': 'Documentation',
        'ui.panel.config.info.issues': 'Issues',
        'ui.panel.config.info.setup_time': 'Setup time',
        'ui.panel.config.info.system_health.manage': 'Manage',
        'ui.panel.config.info.system_health.more_info': 'more info',
        'ui.panel.config.logs.caption': 'Logs',
        'ui.panel.config.logs.description': 'View the Home Assistant logs',
        'ui.panel.config.logs.details': 'Log Details ({level})',
        'ui.panel.config.logs.load_full_log': 'Load Full Home Assistant Log',
        'ui.panel.config.logs.loading_log': 'Loading error log…',
        'ui.panel.config.logs.no_errors': 'No errors have been reported',
        'ui.panel.config.logs.no_issues': 'There are no new issues!',
        'ui.panel.config.logs.clear': 'Clear',
        'ui.panel.config.logs.refresh': 'Refresh',
        'ui.panel.config.logs.copy': 'Copy log entry',
        'ui.panel.config.logs.multiple_messages':
          'message first occurred at {time} and shows up {counter} times',
        'ui.panel.config.logs.level.critical': 'CRITICAL',
        'ui.panel.config.logs.level.error': 'ERROR',
        'ui.panel.config.logs.level.warning': 'WARNING',
        'ui.panel.config.logs.level.info': 'INFO',
        'ui.panel.config.logs.level.debug': 'DEBUG',
        'ui.panel.config.logs.custom_integration': 'custom integration',
        'ui.panel.config.logs.error_from_custom_integration':
          'This error originated from a custom integration.',
        'ui.panel.config.lovelace.caption': 'Lovelace Dashboards',
        'ui.panel.config.lovelace.description':
          'Create customized sets of cards to control your home',
        'ui.panel.config.lovelace.dashboards.default_dashboard':
          'This is the default dashboard',
        'ui.panel.config.lovelace.dashboards.caption': 'Dashboards',
        'ui.panel.config.lovelace.dashboards.conf_mode.yaml': 'YAML file',
        'ui.panel.config.lovelace.dashboards.conf_mode.storage':
          'UI controlled',
        'ui.panel.config.lovelace.dashboards.picker.headers.title': 'Title',
        'ui.panel.config.lovelace.dashboards.picker.headers.conf_mode':
          'Configuration method',
        'ui.panel.config.lovelace.dashboards.picker.headers.default': 'Default',
        'ui.panel.config.lovelace.dashboards.picker.headers.require_admin':
          'Admin only',
        'ui.panel.config.lovelace.dashboards.picker.headers.sidebar':
          'Show in sidebar',
        'ui.panel.config.lovelace.dashboards.picker.headers.filename':
          'Filename',
        'ui.panel.config.lovelace.dashboards.picker.open': 'Open',
        'ui.panel.config.lovelace.dashboards.picker.add_dashboard':
          'Add dashboard',
        'ui.panel.config.lovelace.dashboards.confirm_delete_title':
          'Delete {dashboard_title}?',
        'ui.panel.config.lovelace.dashboards.confirm_delete_text':
          'Your dashboard will be permanently deleted.',
        'ui.panel.config.lovelace.dashboards.cant_edit_yaml':
          'Dashboards defined in YAML cannot be edited from the UI. Change them in configuration.yaml.',
        'ui.panel.config.lovelace.dashboards.cant_edit_default':
          'The default Lovelace dashboard, Overview, cannot be edited from the UI. You can hide it by setting another dashboard as default.',
        'ui.panel.config.lovelace.dashboards.detail.edit_dashboard':
          'Edit dashboard',
        'ui.panel.config.lovelace.dashboards.detail.new_dashboard':
          'Add new dashboard',
        'ui.panel.config.lovelace.dashboards.detail.dismiss': 'Close',
        'ui.panel.config.lovelace.dashboards.detail.show_sidebar':
          'Show in sidebar',
        'ui.panel.config.lovelace.dashboards.detail.icon': 'Icon',
        'ui.panel.config.lovelace.dashboards.detail.title': 'Title',
        'ui.panel.config.lovelace.dashboards.detail.title_required':
          'Title is required.',
        'ui.panel.config.lovelace.dashboards.detail.url': 'URL',
        'ui.panel.config.lovelace.dashboards.detail.url_error_msg':
          'The URL should contain a - and cannot contain spaces or special characters, except for _ and -',
        'ui.panel.config.lovelace.dashboards.detail.require_admin':
          'Admin only',
        'ui.panel.config.lovelace.dashboards.detail.delete': 'Delete',
        'ui.panel.config.lovelace.dashboards.detail.update': 'Update',
        'ui.panel.config.lovelace.dashboards.detail.create': 'Create',
        'ui.panel.config.lovelace.dashboards.detail.set_default':
          'Set as default on this device',
        'ui.panel.config.lovelace.dashboards.detail.remove_default':
          'Remove as default on this device',
        'ui.panel.config.lovelace.resources.caption': 'Resources',
        'ui.panel.config.lovelace.resources.types.css': 'Stylesheet',
        'ui.panel.config.lovelace.resources.types.html': 'HTML (deprecated)',
        'ui.panel.config.lovelace.resources.types.js':
          'JavaScript File (deprecated)',
        'ui.panel.config.lovelace.resources.types.module': 'JavaScript Module',
        'ui.panel.config.lovelace.resources.picker.headers.url': 'URL',
        'ui.panel.config.lovelace.resources.picker.headers.type': 'Type',
        'ui.panel.config.lovelace.resources.picker.no_resources':
          'No resources',
        'ui.panel.config.lovelace.resources.picker.add_resource':
          'Add resource',
        'ui.panel.config.lovelace.resources.confirm_delete':
          'Are you sure you want to delete this resource?',
        'ui.panel.config.lovelace.resources.refresh_header':
          'Do you want to refresh?',
        'ui.panel.config.lovelace.resources.refresh_body':
          'You have to refresh the page to complete the removal. Do you want to refresh now?',
        'ui.panel.config.lovelace.resources.cant_edit_yaml':
          'You are using Lovelace in YAML mode, therefore you cannot manage your resources through the UI. Manage them in configuration.yaml.',
        'ui.panel.config.lovelace.resources.detail.new_resource':
          'Add new resource',
        'ui.panel.config.lovelace.resources.detail.dismiss': 'Close',
        'ui.panel.config.lovelace.resources.detail.warning_header':
          'Be cautious!',
        'ui.panel.config.lovelace.resources.detail.warning_text':
          'Adding resources can be dangerous, make sure you know the source of the resource and trust them. Bad resources could seriously harm your system.',
        'ui.panel.config.lovelace.resources.detail.url': 'URL',
        'ui.panel.config.lovelace.resources.detail.url_error_msg':
          'URL is a required field',
        'ui.panel.config.lovelace.resources.detail.type': 'Resource type',
        'ui.panel.config.lovelace.resources.detail.delete': 'Delete',
        'ui.panel.config.lovelace.resources.detail.update': 'Update',
        'ui.panel.config.lovelace.resources.detail.create': 'Create',
        'ui.panel.config.server_control.caption': 'Server Controls',
        'ui.panel.config.server_control.description':
          'Validate and restart the Home Assistant server',
        'ui.panel.config.server_control.section.validation.heading':
          'Configuration validation',
        'ui.panel.config.server_control.section.validation.introduction':
          'Validate your configuration if you recently made some changes to your configuration and want to make sure that it is all valid.',
        'ui.panel.config.server_control.section.validation.check_config':
          'Check configuration',
        'ui.panel.config.server_control.section.validation.valid':
          'Configuration valid!',
        'ui.panel.config.server_control.section.validation.invalid':
          'Configuration invalid',
        'ui.panel.config.server_control.section.reloading.heading':
          'YAML configuration reloading',
        'ui.panel.config.server_control.section.reloading.introduction':
          'Some parts of Home Assistant can reload without requiring a restart. Clicking one of the options below will unload their current YAML configuration and load the new one.',
        'ui.panel.config.server_control.section.reloading.reload': '{domain}',
        'ui.panel.config.server_control.section.reloading.core':
          'Location & customizations',
        'ui.panel.config.server_control.section.reloading.group':
          'Groups, group entities, and notify services',
        'ui.panel.config.server_control.section.reloading.automation':
          'Automations',
        'ui.panel.config.server_control.section.reloading.script': 'Scripts',
        'ui.panel.config.server_control.section.reloading.scene': 'Scenes',
        'ui.panel.config.server_control.section.reloading.person': 'People',
        'ui.panel.config.server_control.section.reloading.zone': 'Zones',
        'ui.panel.config.server_control.section.reloading.input_boolean':
          'Input booleans',
        'ui.panel.config.server_control.section.reloading.input_text':
          'Input texts',
        'ui.panel.config.server_control.section.reloading.input_number':
          'Input numbers',
        'ui.panel.config.server_control.section.reloading.input_datetime':
          'Input date times',
        'ui.panel.config.server_control.section.reloading.input_select':
          'Input selects',
        'ui.panel.config.server_control.section.reloading.template':
          'Template entities',
        'ui.panel.config.server_control.section.reloading.universal':
          'Universal media player entities',
        'ui.panel.config.server_control.section.reloading.rest':
          'Rest entities and notify services',
        'ui.panel.config.server_control.section.reloading.command_line':
          'Command line entities',
        'ui.panel.config.server_control.section.reloading.filter':
          'Filter entities',
        'ui.panel.config.server_control.section.reloading.statistics':
          'Statistics entities',
        'ui.panel.config.server_control.section.reloading.generic':
          'Generic IP camera entities',
        'ui.panel.config.server_control.section.reloading.generic_thermostat':
          'Generic thermostat entities',
        'ui.panel.config.server_control.section.reloading.homekit': 'HomeKit',
        'ui.panel.config.server_control.section.reloading.min_max':
          'Min/max entities',
        'ui.panel.config.server_control.section.reloading.history_stats':
          'History stats entities',
        'ui.panel.config.server_control.section.reloading.trend':
          'Trend entities',
        'ui.panel.config.server_control.section.reloading.ping':
          'Ping binary sensor entities',
        'ui.panel.config.server_control.section.reloading.filesize':
          'File size entities',
        'ui.panel.config.server_control.section.reloading.telegram':
          'Telegram notify services',
        'ui.panel.config.server_control.section.reloading.smtp':
          'SMTP notify services',
        'ui.panel.config.server_control.section.reloading.mqtt':
          'Manually configured MQTT entities',
        'ui.panel.config.server_control.section.reloading.rpi_gpio':
          'Raspberry Pi GPIO entities',
        'ui.panel.config.server_control.section.reloading.timer': 'Timers',
        'ui.panel.config.server_control.section.server_management.heading':
          'Server management',
        'ui.panel.config.server_control.section.server_management.introduction':
          'Control your Home Assistant.',
        'ui.panel.config.server_control.section.server_management.restart':
          'Restart',
        'ui.panel.config.server_control.section.server_management.confirm_restart':
          'Are you sure you want to restart Home Assistant?',
        'ui.panel.config.server_control.section.server_management.stop': 'Stop',
        'ui.panel.config.server_control.section.server_management.confirm_stop':
          'Are you sure you want to stop Home Assistant?',
        'ui.panel.config.automation.caption': 'Automations',
        'ui.panel.config.automation.description':
          'Create custom behavior rules for your home',
        'ui.panel.config.automation.picker.header': 'Automation Editor',
        'ui.panel.config.automation.picker.introduction':
          'The automation editor allows you to create and edit automations. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
        'ui.panel.config.automation.picker.learn_more':
          'Learn more about automations',
        'ui.panel.config.automation.picker.pick_automation':
          'Pick automation to edit',
        'ui.panel.config.automation.picker.no_automations':
          'We couldn’t find any automations',
        'ui.panel.config.automation.picker.add_automation': 'Add automation',
        'ui.panel.config.automation.picker.only_editable':
          'Only automations defined in automations.yaml are editable.',
        'ui.panel.config.automation.picker.dev_only_editable':
          'Only automations that have a unique ID assigned are debuggable.',
        'ui.panel.config.automation.picker.edit_automation': 'Edit automation',
        'ui.panel.config.automation.picker.dev_automation': 'Debug automation',
        'ui.panel.config.automation.picker.show_info_automation':
          'Show info about automation',
        'ui.panel.config.automation.picker.delete_automation':
          'Delete automation',
        'ui.panel.config.automation.picker.delete_confirm':
          'Are you sure you want to delete this automation?',
        'ui.panel.config.automation.picker.duplicate_automation':
          'Duplicate automation',
        'ui.panel.config.automation.picker.duplicate': 'Duplicate',
        'ui.panel.config.automation.picker.headers.name': 'Name',
        'ui.panel.config.automation.dialog_new.header':
          'Create a new automation',
        'ui.panel.config.automation.dialog_new.how':
          'How do you want to create your new automation?',
        'ui.panel.config.automation.dialog_new.blueprint.use_blueprint':
          'Use a blueprint',
        'ui.panel.config.automation.dialog_new.thingtalk.header':
          'Describe the automation you want to create',
        'ui.panel.config.automation.dialog_new.thingtalk.intro':
          'And we will try to create it for you. For example: Turn the lights off when I leave.',
        'ui.panel.config.automation.dialog_new.thingtalk.input_label':
          'What should this automation do?',
        'ui.panel.config.automation.dialog_new.thingtalk.create': 'Create',
        'ui.panel.config.automation.dialog_new.start_empty':
          'Start with an empty automation',
        'ui.panel.config.automation.dialog_new.start_empty_description':
          'Create a new automation from scratch',
        'ui.panel.config.automation.editor.enable_disable':
          'Enable/Disable automation',
        'ui.panel.config.automation.editor.show_trace': 'Show trace',
        'ui.panel.config.automation.editor.introduction':
          'Use automations to bring your home to life.',
        'ui.panel.config.automation.editor.default_name': 'New Automation',
        'ui.panel.config.automation.editor.load_error_not_editable':
          'Only automations in automations.yaml are editable.',
        'ui.panel.config.automation.editor.load_error_unknown':
          'Error loading automation ({err_no}).',
        'ui.panel.config.automation.editor.save': 'Save',
        'ui.panel.config.automation.editor.unsaved_confirm':
          'You have unsaved changes. Are you sure you want to leave?',
        'ui.panel.config.automation.editor.alias': 'Name',
        'ui.panel.config.automation.editor.move_up': 'Move up',
        'ui.panel.config.automation.editor.move_down': 'Move down',
        'ui.panel.config.automation.editor.description.label': 'Description',
        'ui.panel.config.automation.editor.description.placeholder':
          'Optional description',
        'ui.panel.config.automation.editor.blueprint.header': 'Blueprint',
        'ui.panel.config.automation.editor.blueprint.blueprint_to_use':
          'Blueprint to use',
        'ui.panel.config.automation.editor.blueprint.no_blueprints':
          "You don't have any blueprints",
        'ui.panel.config.automation.editor.blueprint.no_inputs':
          "This blueprint doesn't have any inputs.",
        'ui.panel.config.automation.editor.modes.label': 'Mode',
        'ui.panel.config.automation.editor.modes.description':
          'The mode controls what happens when the automation is triggered while the actions are still running from a previous trigger. Check the {documentation_link} for more info.',
        'ui.panel.config.automation.editor.modes.documentation':
          'automation documentation',
        'ui.panel.config.automation.editor.modes.single': 'Single (default)',
        'ui.panel.config.automation.editor.modes.restart': 'Restart',
        'ui.panel.config.automation.editor.modes.queued': 'Queued',
        'ui.panel.config.automation.editor.modes.parallel': 'Parallel',
        'ui.panel.config.automation.editor.max.queued': 'Queue length',
        'ui.panel.config.automation.editor.max.parallel':
          'Max number of parallel runs',
        'ui.panel.config.automation.editor.edit_yaml': 'Edit in YAML',
        'ui.panel.config.automation.editor.edit_ui': 'Edit in visual editor',
        'ui.panel.config.automation.editor.copy_to_clipboard':
          'Copy to Clipboard',
        'ui.panel.config.automation.editor.triggers.name': 'Trigger',
        'ui.panel.config.automation.editor.triggers.header': 'Triggers',
        'ui.panel.config.automation.editor.triggers.introduction':
          'Triggers are what starts the processing of an automation rule. It is possible to specify multiple triggers for the same rule. Once a trigger starts, Home Assistant will validate the conditions, if any, and call the action.',
        'ui.panel.config.automation.editor.triggers.learn_more':
          'Learn more about triggers',
        'ui.panel.config.automation.editor.triggers.add': 'Add trigger',
        'ui.panel.config.automation.editor.triggers.id':
          'Trigger ID (used by the trigger condition)',
        'ui.panel.config.automation.editor.triggers.duplicate': 'Duplicate',
        'ui.panel.config.automation.editor.triggers.delete': 'Delete',
        'ui.panel.config.automation.editor.triggers.delete_confirm':
          'Are you sure you want to delete this?',
        'ui.panel.config.automation.editor.triggers.unsupported_platform':
          'No visual editor support for platform: {platform}',
        'ui.panel.config.automation.editor.triggers.type_select':
          'Trigger type',
        'ui.panel.config.automation.editor.triggers.type.device.label':
          'Device',
        'ui.panel.config.automation.editor.triggers.type.device.trigger':
          'Trigger',
        'ui.panel.config.automation.editor.triggers.type.device.extra_fields.above':
          'Above',
        'ui.panel.config.automation.editor.triggers.type.device.extra_fields.below':
          'Below',
        'ui.panel.config.automation.editor.triggers.type.device.extra_fields.for':
          'Duration (optional)',
        'ui.panel.config.automation.editor.triggers.type.device.extra_fields.zone':
          'Zone',
        'ui.panel.config.automation.editor.triggers.type.event.label': 'Event',
        'ui.panel.config.automation.editor.triggers.type.event.event_type':
          'Event type',
        'ui.panel.config.automation.editor.triggers.type.event.event_data':
          'Event data',
        'ui.panel.config.automation.editor.triggers.type.event.context_users':
          'Limit to events triggered by',
        'ui.panel.config.automation.editor.triggers.type.event.context_user_picked':
          'User firing event',
        'ui.panel.config.automation.editor.triggers.type.event.context_user_pick':
          'Select user',
        'ui.panel.config.automation.editor.triggers.type.geo_location.label':
          'Geolocation',
        'ui.panel.config.automation.editor.triggers.type.geo_location.source':
          'Source',
        'ui.panel.config.automation.editor.triggers.type.geo_location.zone':
          'Zone',
        'ui.panel.config.automation.editor.triggers.type.geo_location.event':
          'Event:',
        'ui.panel.config.automation.editor.triggers.type.geo_location.enter':
          'Enter',
        'ui.panel.config.automation.editor.triggers.type.geo_location.leave':
          'Leave',
        'ui.panel.config.automation.editor.triggers.type.state.label': 'State',
        'ui.panel.config.automation.editor.triggers.type.state.attribute':
          'Attribute (optional)',
        'ui.panel.config.automation.editor.triggers.type.state.from':
          'From (optional)',
        'ui.panel.config.automation.editor.triggers.type.state.for':
          'For (optional)',
        'ui.panel.config.automation.editor.triggers.type.state.to':
          'To (optional)',
        'ui.panel.config.automation.editor.triggers.type.homeassistant.label':
          'Home Assistant',
        'ui.panel.config.automation.editor.triggers.type.homeassistant.event':
          'Event:',
        'ui.panel.config.automation.editor.triggers.type.homeassistant.start':
          'Start',
        'ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown':
          'Shutdown',
        'ui.panel.config.automation.editor.triggers.type.mqtt.label': 'MQTT',
        'ui.panel.config.automation.editor.triggers.type.mqtt.topic': 'Topic',
        'ui.panel.config.automation.editor.triggers.type.mqtt.payload':
          'Payload (optional)',
        'ui.panel.config.automation.editor.triggers.type.numeric_state.label':
          'Numeric state',
        'ui.panel.config.automation.editor.triggers.type.numeric_state.above':
          'Above',
        'ui.panel.config.automation.editor.triggers.type.numeric_state.below':
          'Below',
        'ui.panel.config.automation.editor.triggers.type.numeric_state.value_template':
          'Value template (optional)',
        'ui.panel.config.automation.editor.triggers.type.sun.label': 'Sun',
        'ui.panel.config.automation.editor.triggers.type.sun.event': 'Event:',
        'ui.panel.config.automation.editor.triggers.type.sun.sunrise':
          'Sunrise',
        'ui.panel.config.automation.editor.triggers.type.sun.sunset': 'Sunset',
        'ui.panel.config.automation.editor.triggers.type.sun.offset':
          'Offset (optional)',
        'ui.panel.config.automation.editor.triggers.type.tag.label': 'Tag',
        'ui.panel.config.automation.editor.triggers.type.template.label':
          'Template',
        'ui.panel.config.automation.editor.triggers.type.template.value_template':
          'Value template',
        'ui.panel.config.automation.editor.triggers.type.time.type_value':
          'Fixed time',
        'ui.panel.config.automation.editor.triggers.type.time.type_input':
          'Value of a date/time helper',
        'ui.panel.config.automation.editor.triggers.type.time.label': 'Time',
        'ui.panel.config.automation.editor.triggers.type.time.at': 'At time',
        'ui.panel.config.automation.editor.triggers.type.time_pattern.label':
          'Time Pattern',
        'ui.panel.config.automation.editor.triggers.type.time_pattern.hours':
          'Hours',
        'ui.panel.config.automation.editor.triggers.type.time_pattern.minutes':
          'Minutes',
        'ui.panel.config.automation.editor.triggers.type.time_pattern.seconds':
          'Seconds',
        'ui.panel.config.automation.editor.triggers.type.webhook.label':
          'Webhook',
        'ui.panel.config.automation.editor.triggers.type.webhook.webhook_id':
          'Webhook ID',
        'ui.panel.config.automation.editor.triggers.type.zone.label': 'Zone',
        'ui.panel.config.automation.editor.triggers.type.zone.entity':
          'Entity with location',
        'ui.panel.config.automation.editor.triggers.type.zone.zone': 'Zone',
        'ui.panel.config.automation.editor.triggers.type.zone.event': 'Event:',
        'ui.panel.config.automation.editor.triggers.type.zone.enter': 'Enter',
        'ui.panel.config.automation.editor.triggers.type.zone.leave': 'Leave',
        'ui.panel.config.automation.editor.conditions.name': 'Condition',
        'ui.panel.config.automation.editor.conditions.header': 'Conditions',
        'ui.panel.config.automation.editor.conditions.introduction':
          'Conditions are optional and will prevent the automation from running unless all conditions are satisfied.',
        'ui.panel.config.automation.editor.conditions.learn_more':
          'Learn more about conditions',
        'ui.panel.config.automation.editor.conditions.add': 'Add condition',
        'ui.panel.config.automation.editor.conditions.duplicate': 'Duplicate',
        'ui.panel.config.automation.editor.conditions.delete': 'Delete',
        'ui.panel.config.automation.editor.conditions.delete_confirm':
          'Are you sure you want to delete this?',
        'ui.panel.config.automation.editor.conditions.unsupported_condition':
          'No visual editor support for condition: {condition}',
        'ui.panel.config.automation.editor.conditions.type_select':
          'Condition type',
        'ui.panel.config.automation.editor.conditions.type.and.label': 'And',
        'ui.panel.config.automation.editor.conditions.type.device.label':
          'Device',
        'ui.panel.config.automation.editor.conditions.type.device.condition':
          'Condition',
        'ui.panel.config.automation.editor.conditions.type.device.extra_fields.above':
          'Above',
        'ui.panel.config.automation.editor.conditions.type.device.extra_fields.below':
          'Below',
        'ui.panel.config.automation.editor.conditions.type.device.extra_fields.for':
          'Duration',
        'ui.panel.config.automation.editor.conditions.type.device.extra_fields.hvac_mode':
          'HVAC mode',
        'ui.panel.config.automation.editor.conditions.type.device.extra_fields.preset_mode':
          'Preset mode',
        'ui.panel.config.automation.editor.conditions.type.not.label': 'Not',
        'ui.panel.config.automation.editor.conditions.type.numeric_state.label':
          'Numeric state',
        'ui.panel.config.automation.editor.conditions.type.numeric_state.above':
          'Above',
        'ui.panel.config.automation.editor.conditions.type.numeric_state.below':
          'Below',
        'ui.panel.config.automation.editor.conditions.type.numeric_state.value_template':
          'Value template (optional)',
        'ui.panel.config.automation.editor.conditions.type.or.label': 'Or',
        'ui.panel.config.automation.editor.conditions.type.state.label':
          'State',
        'ui.panel.config.automation.editor.conditions.type.state.state':
          'State',
        'ui.panel.config.automation.editor.conditions.type.sun.label': 'Sun',
        'ui.panel.config.automation.editor.conditions.type.sun.before':
          'Before:',
        'ui.panel.config.automation.editor.conditions.type.sun.after': 'After:',
        'ui.panel.config.automation.editor.conditions.type.sun.before_offset':
          'Before offset (optional)',
        'ui.panel.config.automation.editor.conditions.type.sun.after_offset':
          'After offset (optional)',
        'ui.panel.config.automation.editor.conditions.type.sun.sunrise':
          'Sunrise',
        'ui.panel.config.automation.editor.conditions.type.sun.sunset':
          'Sunset',
        'ui.panel.config.automation.editor.conditions.type.template.label':
          'Template',
        'ui.panel.config.automation.editor.conditions.type.template.value_template':
          'Value template',
        'ui.panel.config.automation.editor.conditions.type.time.type_value':
          'Fixed time',
        'ui.panel.config.automation.editor.conditions.type.time.type_input':
          'Value of a date/time helper',
        'ui.panel.config.automation.editor.conditions.type.time.label': 'Time',
        'ui.panel.config.automation.editor.conditions.type.time.after': 'After',
        'ui.panel.config.automation.editor.conditions.type.time.before':
          'Before',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.mon':
          'Monday',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.tue':
          'Tuesday',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.wed':
          'Wednesday',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.thu':
          'Thursday',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.fri':
          'Friday',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.sat':
          'Saturday',
        'ui.panel.config.automation.editor.conditions.type.time.weekdays.sun':
          'Sunday',
        'ui.panel.config.automation.editor.conditions.type.trigger.label':
          'Trigger',
        'ui.panel.config.automation.editor.conditions.type.trigger.no_triggers':
          'No triggers available',
        'ui.panel.config.automation.editor.conditions.type.trigger.id':
          'Trigger ID',
        'ui.panel.config.automation.editor.conditions.type.zone.label': 'Zone',
        'ui.panel.config.automation.editor.conditions.type.zone.entity':
          'Entity with location',
        'ui.panel.config.automation.editor.conditions.type.zone.zone': 'Zone',
        'ui.panel.config.automation.editor.actions.name': 'Action',
        'ui.panel.config.automation.editor.actions.header': 'Actions',
        'ui.panel.config.automation.editor.actions.introduction':
          'The actions are what Home Assistant will do when the automation is triggered.',
        'ui.panel.config.automation.editor.actions.learn_more':
          'Learn more about actions',
        'ui.panel.config.automation.editor.actions.add': 'Add action',
        'ui.panel.config.automation.editor.actions.duplicate': 'Duplicate',
        'ui.panel.config.automation.editor.actions.delete': 'Delete',
        'ui.panel.config.automation.editor.actions.delete_confirm':
          'Are you sure you want to delete this?',
        'ui.panel.config.automation.editor.actions.unsupported_action':
          'No visual editor support for action: {action}',
        'ui.panel.config.automation.editor.actions.type_select': 'Action type',
        'ui.panel.config.automation.editor.actions.type.service.label':
          'Call service',
        'ui.panel.config.automation.editor.actions.type.delay.label':
          'Wait for time to pass (delay)',
        'ui.panel.config.automation.editor.actions.type.delay.delay':
          'Duration',
        'ui.panel.config.automation.editor.actions.type.wait_template.label':
          'Wait for a template',
        'ui.panel.config.automation.editor.actions.type.wait_template.wait_template':
          'Wait Template',
        'ui.panel.config.automation.editor.actions.type.wait_template.timeout':
          'Timeout (optional)',
        'ui.panel.config.automation.editor.actions.type.wait_template.continue_timeout':
          'Continue on timeout',
        'ui.panel.config.automation.editor.actions.type.wait_for_trigger.label':
          'Wait for a trigger',
        'ui.panel.config.automation.editor.actions.type.wait_for_trigger.timeout':
          'Timeout (optional)',
        'ui.panel.config.automation.editor.actions.type.wait_for_trigger.continue_timeout':
          'Continue on timeout',
        'ui.panel.config.automation.editor.actions.type.condition.label':
          'Condition',
        'ui.panel.config.automation.editor.actions.type.event.label':
          'Fire event',
        'ui.panel.config.automation.editor.actions.type.event.event': 'Event',
        'ui.panel.config.automation.editor.actions.type.event.service_data':
          'Service data',
        'ui.panel.config.automation.editor.actions.type.device_id.label':
          'Device',
        'ui.panel.config.automation.editor.actions.type.device_id.action':
          'Action',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.code':
          'Code',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.message':
          'Message',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.title':
          'Title',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.position':
          'Position',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.mode':
          'Mode',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.humidity':
          'Humidity',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.value':
          'Value',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.brightness_pct':
          'Brightness',
        'ui.panel.config.automation.editor.actions.type.device_id.extra_fields.flash':
          'Flash',
        'ui.panel.config.automation.editor.actions.type.scene.label':
          'Activate scene',
        'ui.panel.config.automation.editor.actions.type.repeat.label': 'Repeat',
        'ui.panel.config.automation.editor.actions.type.repeat.type_select':
          'Repeat type',
        'ui.panel.config.automation.editor.actions.type.repeat.type.count.label':
          'Count',
        'ui.panel.config.automation.editor.actions.type.repeat.type.while.label':
          'While',
        'ui.panel.config.automation.editor.actions.type.repeat.type.while.conditions':
          'While conditions',
        'ui.panel.config.automation.editor.actions.type.repeat.type.until.label':
          'Until',
        'ui.panel.config.automation.editor.actions.type.repeat.type.until.conditions':
          'Until conditions',
        'ui.panel.config.automation.editor.actions.type.repeat.sequence':
          'Actions',
        'ui.panel.config.automation.editor.actions.type.choose.label': 'Choose',
        'ui.panel.config.automation.editor.actions.type.choose.default':
          'Default actions',
        'ui.panel.config.automation.editor.actions.type.choose.option':
          'Option {number}',
        'ui.panel.config.automation.editor.actions.type.choose.add_option':
          'Add option',
        'ui.panel.config.automation.editor.actions.type.choose.remove_option':
          'Remove option',
        'ui.panel.config.automation.editor.actions.type.choose.conditions':
          'Conditions',
        'ui.panel.config.automation.editor.actions.type.choose.sequence':
          'Actions',
        'ui.panel.config.automation.thingtalk.create': 'Create automation',
        'ui.panel.config.automation.thingtalk.task_selection.header':
          'Create a new automation',
        'ui.panel.config.automation.thingtalk.task_selection.introduction':
          'Type below what this automation should do, and we will try to convert it into a Home Assistant automation.',
        'ui.panel.config.automation.thingtalk.task_selection.language_note':
          'Note: Only English is supported for now.',
        'ui.panel.config.automation.thingtalk.task_selection.for_example':
          'For example:',
        'ui.panel.config.automation.thingtalk.task_selection.error_empty':
          'Enter a command or tap skip.',
        'ui.panel.config.automation.thingtalk.task_selection.error_unsupported':
          "We couldn't create an automation for that (yet?).",
        'ui.panel.config.automation.thingtalk.link_devices.header':
          'Great! Now we need to link some devices',
        'ui.panel.config.automation.thingtalk.link_devices.ambiguous_entities':
          'One or more devices have more than one matching entity, please pick the one you want to use.',
        'ui.panel.config.automation.thingtalk.link_devices.unknown_placeholder':
          'Unknown placeholder',
        'ui.panel.config.automation.trace.refresh': 'Refresh',
        'ui.panel.config.automation.trace.download_trace': 'Download trace',
        'ui.panel.config.automation.trace.edit_automation': 'Edit automation',
        'ui.panel.config.automation.trace.older_trace': 'Older trace',
        'ui.panel.config.automation.trace.newer_trace': 'Newer trace',
        'ui.panel.config.blueprint.caption': 'Blueprints',
        'ui.panel.config.blueprint.description': 'Manage blueprints',
        'ui.panel.config.blueprint.overview.header': 'Blueprint Editor',
        'ui.panel.config.blueprint.overview.introduction':
          'The blueprint configuration allows you to import and manage your blueprints.',
        'ui.panel.config.blueprint.overview.learn_more':
          'Learn more about using blueprints',
        'ui.panel.config.blueprint.overview.headers.name': 'Name',
        'ui.panel.config.blueprint.overview.headers.type': 'Type',
        'ui.panel.config.blueprint.overview.headers.file_name': 'File name',
        'ui.panel.config.blueprint.overview.types.automation': 'Automation',
        'ui.panel.config.blueprint.overview.types.script': 'Script',
        'ui.panel.config.blueprint.overview.confirm_delete_header':
          'Delete this blueprint?',
        'ui.panel.config.blueprint.overview.confirm_delete_text':
          'Are you sure you want to delete this blueprint?',
        'ui.panel.config.blueprint.overview.add_blueprint': 'Import blueprint',
        'ui.panel.config.blueprint.overview.create_automation':
          'Create automation',
        'ui.panel.config.blueprint.overview.create_script': 'Create script',
        'ui.panel.config.blueprint.overview.delete_blueprint':
          'Delete blueprint',
        'ui.panel.config.blueprint.overview.share_blueprint': 'Share blueprint',
        'ui.panel.config.blueprint.overview.share_blueprint_no_url':
          'Unable to share blueprint: no source url',
        'ui.panel.config.blueprint.overview.discover_more':
          'Discover more blueprints',
        'ui.panel.config.blueprint.add.header': 'Import a blueprint',
        'ui.panel.config.blueprint.add.import_header': "Blueprint ''{name}''",
        'ui.panel.config.blueprint.add.import_introduction_link':
          'You can import blueprints of other users from Github and the {community_link}. Enter the URL of the blueprint below.',
        'ui.panel.config.blueprint.add.community_forums': 'community forums',
        'ui.panel.config.blueprint.add.url': 'URL of the blueprint',
        'ui.panel.config.blueprint.add.raw_blueprint': 'Blueprint content',
        'ui.panel.config.blueprint.add.importing': 'Loading blueprint…',
        'ui.panel.config.blueprint.add.import_btn': 'Preview blueprint',
        'ui.panel.config.blueprint.add.saving': 'Importing blueprint…',
        'ui.panel.config.blueprint.add.save_btn': 'Import blueprint',
        'ui.panel.config.blueprint.add.error_no_url':
          'Please enter the URL of the blueprint.',
        'ui.panel.config.blueprint.add.unsupported_blueprint':
          'This blueprint is not supported',
        'ui.panel.config.blueprint.add.file_name': 'Blueprint Path',
        'ui.panel.config.script.caption': 'Scripts',
        'ui.panel.config.script.description': 'Execute a sequence of actions',
        'ui.panel.config.script.picker.header': 'Script Editor',
        'ui.panel.config.script.picker.introduction':
          'The script editor allows you to create and edit scripts. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
        'ui.panel.config.script.picker.learn_more': 'Learn more about scripts',
        'ui.panel.config.script.picker.no_scripts':
          'We couldn’t find any scripts',
        'ui.panel.config.script.picker.add_script': 'Add script',
        'ui.panel.config.script.picker.show_info': 'Show info about script',
        'ui.panel.config.script.picker.run_script': 'Run script',
        'ui.panel.config.script.picker.edit_script': 'Edit script',
        'ui.panel.config.script.picker.dev_script': 'Debug script',
        'ui.panel.config.script.picker.headers.name': 'Name',
        'ui.panel.config.script.picker.duplicate_script': 'Duplicate script',
        'ui.panel.config.script.picker.duplicate': 'Duplicate',
        'ui.panel.config.script.editor.alias': 'Name',
        'ui.panel.config.script.editor.icon': 'Icon',
        'ui.panel.config.script.editor.id': 'Entity ID',
        'ui.panel.config.script.editor.id_already_exists_save_error':
          "You can't save this script because the ID is not unique, pick another ID or leave it blank to automatically generate one.",
        'ui.panel.config.script.editor.id_already_exists':
          'This ID already exists',
        'ui.panel.config.script.editor.introduction':
          'Use scripts to run a sequence of actions.',
        'ui.panel.config.script.editor.show_trace': 'Show trace',
        'ui.panel.config.script.editor.header': 'Script: {name}',
        'ui.panel.config.script.editor.default_name': 'New Script',
        'ui.panel.config.script.editor.modes.label': 'Mode',
        'ui.panel.config.script.editor.modes.description':
          'The mode controls what happens when script is invoked while it is still running from one or more previous invocations. Check the {documentation_link} for more info.',
        'ui.panel.config.script.editor.modes.documentation':
          'script documentation',
        'ui.panel.config.script.editor.modes.single': 'Single (default)',
        'ui.panel.config.script.editor.modes.restart': 'Restart',
        'ui.panel.config.script.editor.modes.queued': 'Queued',
        'ui.panel.config.script.editor.modes.parallel': 'Parallel',
        'ui.panel.config.script.editor.max.queued': 'Queue length',
        'ui.panel.config.script.editor.max.parallel':
          'Max number of parallel runs',
        'ui.panel.config.script.editor.load_error_not_editable':
          'Only scripts inside scripts.yaml are editable.',
        'ui.panel.config.script.editor.delete_confirm':
          'Are you sure you want to delete this script?',
        'ui.panel.config.script.editor.delete_script': 'Delete script',
        'ui.panel.config.script.editor.save_script': 'Save script',
        'ui.panel.config.script.editor.sequence': 'Sequence',
        'ui.panel.config.script.editor.sequence_sentence':
          'The sequence of actions of this script.',
        'ui.panel.config.script.editor.link_available_actions':
          'Learn more about available actions.',
        'ui.panel.config.scene.caption': 'Scenes',
        'ui.panel.config.scene.description':
          'Capture device states and easily recall them later',
        'ui.panel.config.scene.activated': 'Activated scene {name}.',
        'ui.panel.config.scene.picker.header': 'Scene Editor',
        'ui.panel.config.scene.picker.introduction':
          'The scene editor allows you to create and edit scenes. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
        'ui.panel.config.scene.picker.learn_more': 'Learn more about scenes',
        'ui.panel.config.scene.picker.pick_scene': 'Pick scene to edit',
        'ui.panel.config.scene.picker.no_scenes': 'We couldn’t find any scenes',
        'ui.panel.config.scene.picker.add_scene': 'Add scene',
        'ui.panel.config.scene.picker.only_editable':
          'Only scenes defined in scenes.yaml are editable.',
        'ui.panel.config.scene.picker.edit_scene': 'Edit scene',
        'ui.panel.config.scene.picker.show_info_scene': 'Show info about scene',
        'ui.panel.config.scene.picker.delete_scene': 'Delete scene',
        'ui.panel.config.scene.picker.delete_confirm':
          'Are you sure you want to delete this scene?',
        'ui.panel.config.scene.picker.duplicate_scene': 'Duplicate scene',
        'ui.panel.config.scene.picker.duplicate': 'Duplicate',
        'ui.panel.config.scene.picker.headers.name': 'Name',
        'ui.panel.config.scene.editor.introduction':
          'Use scenes to bring your home to life.',
        'ui.panel.config.scene.editor.default_name': 'New Scene',
        'ui.panel.config.scene.editor.load_error_not_editable':
          'Only scenes in scenes.yaml are editable.',
        'ui.panel.config.scene.editor.load_error_unknown':
          'Error loading scene ({err_no}).',
        'ui.panel.config.scene.editor.save': 'Save',
        'ui.panel.config.scene.editor.unsaved_confirm':
          'You have unsaved changes. Are you sure you want to leave?',
        'ui.panel.config.scene.editor.name': 'Name',
        'ui.panel.config.scene.editor.icon': 'Icon',
        'ui.panel.config.scene.editor.area': 'Area',
        'ui.panel.config.scene.editor.devices.header': 'Devices',
        'ui.panel.config.scene.editor.devices.introduction':
          'Add the devices that you want to be included in your scene. Set all the devices to the state you want for this scene.',
        'ui.panel.config.scene.editor.devices.add': 'Add a device',
        'ui.panel.config.scene.editor.devices.delete': 'Delete device',
        'ui.panel.config.scene.editor.entities.header': 'Entities',
        'ui.panel.config.scene.editor.entities.introduction':
          'Entities that do not belong to a device can be set here.',
        'ui.panel.config.scene.editor.entities.without_device':
          'Entities without device',
        'ui.panel.config.scene.editor.entities.device_entities':
          'If you add an entity that belongs to a device, the device will be added.',
        'ui.panel.config.scene.editor.entities.add': 'Add an entity',
        'ui.panel.config.scene.editor.entities.delete': 'Delete entity',
        'ui.panel.config.cloud.description_login': 'Logged in as {email}',
        'ui.panel.config.cloud.description_not_login': 'Not logged in',
        'ui.panel.config.cloud.description_features':
          'Control home when away and integrate with Alexa and Google Assistant',
        'ui.panel.config.cloud.login.title': 'Cloud Login',
        'ui.panel.config.cloud.login.introduction':
          'Home Assistant Cloud provides you with a secure remote connection to your instance while away from home. It also allows you to connect with cloud-only services: Amazon Alexa and Google Assistant.',
        'ui.panel.config.cloud.login.introduction2':
          'This service is run by our partner ',
        'ui.panel.config.cloud.login.introduction2a':
          ', a company founded by the founders of Home Assistant.',
        'ui.panel.config.cloud.login.introduction3':
          'Home Assistant Cloud is a subscription service with a free one month trial. No payment information necessary.',
        'ui.panel.config.cloud.login.learn_more_link':
          'Learn more about Home Assistant Cloud',
        'ui.panel.config.cloud.login.dismiss': 'Dismiss',
        'ui.panel.config.cloud.login.sign_in': 'Sign in',
        'ui.panel.config.cloud.login.email': 'Email',
        'ui.panel.config.cloud.login.email_error_msg': 'Invalid email',
        'ui.panel.config.cloud.login.password': 'Password',
        'ui.panel.config.cloud.login.password_error_msg':
          'Passwords are at least 8 characters',
        'ui.panel.config.cloud.login.forgot_password': 'Forgot password?',
        'ui.panel.config.cloud.login.start_trial':
          'Start your free 1 month trial',
        'ui.panel.config.cloud.login.trial_info':
          'No payment information necessary',
        'ui.panel.config.cloud.login.alert_password_change_required':
          'You need to change your password before logging in.',
        'ui.panel.config.cloud.login.alert_email_confirm_necessary':
          'You need to confirm your email before logging in.',
        'ui.panel.config.cloud.forgot_password.title': 'Forgot password',
        'ui.panel.config.cloud.forgot_password.subtitle':
          'Forgot your password',
        'ui.panel.config.cloud.forgot_password.instructions':
          'Enter your email address and we will send you a link to reset your password.',
        'ui.panel.config.cloud.forgot_password.email': 'Email',
        'ui.panel.config.cloud.forgot_password.email_error_msg':
          'Invalid email',
        'ui.panel.config.cloud.forgot_password.send_reset_email':
          'Send reset email',
        'ui.panel.config.cloud.forgot_password.check_your_email':
          'Check your email for instructions on how to reset your password.',
        'ui.panel.config.cloud.register.title': 'Register Account',
        'ui.panel.config.cloud.register.headline': 'Start your free trial',
        'ui.panel.config.cloud.register.information':
          'Create an account to start your free one month trial with Home Assistant Cloud. No payment information necessary.',
        'ui.panel.config.cloud.register.information2':
          'The trial will give you access to all the benefits of Home Assistant Cloud, including:',
        'ui.panel.config.cloud.register.feature_remote_control':
          'Control of Home Assistant away from home',
        'ui.panel.config.cloud.register.feature_google_home':
          'Integration with Google Assistant',
        'ui.panel.config.cloud.register.feature_amazon_alexa':
          'Integration with Amazon Alexa',
        'ui.panel.config.cloud.register.feature_webhook_apps':
          'Easy integration with webhook-based apps like OwnTracks',
        'ui.panel.config.cloud.register.information3':
          'This service is run by our partner ',
        'ui.panel.config.cloud.register.information3a':
          ', a company founded by the founders of Home Assistant.',
        'ui.panel.config.cloud.register.information4':
          'By registering an account you agree to the following terms and conditions.',
        'ui.panel.config.cloud.register.link_terms_conditions':
          'Terms and Conditions',
        'ui.panel.config.cloud.register.link_privacy_policy': 'Privacy Policy',
        'ui.panel.config.cloud.register.create_account': 'Create Account',
        'ui.panel.config.cloud.register.email_address': 'Email address',
        'ui.panel.config.cloud.register.email_error_msg': 'Invalid email',
        'ui.panel.config.cloud.register.password': 'Password',
        'ui.panel.config.cloud.register.password_error_msg':
          'Passwords are at least 8 characters',
        'ui.panel.config.cloud.register.start_trial': 'Start Trial',
        'ui.panel.config.cloud.register.resend_confirm_email':
          'Resend confirmation email',
        'ui.panel.config.cloud.register.account_created':
          'Account created! Check your email for instructions on how to activate your account.',
        'ui.panel.config.cloud.account.thank_you_note':
          "Thank you for being part of Home Assistant Cloud. It's because of people like you that we are able to make a great home automation experience for everyone. Thank you!",
        'ui.panel.config.cloud.account.nabu_casa_account': 'Nabu Casa Account',
        'ui.panel.config.cloud.account.connection_status':
          'Cloud connection status',
        'ui.panel.config.cloud.account.manage_account': 'Manage Account',
        'ui.panel.config.cloud.account.sign_out': 'Sign out',
        'ui.panel.config.cloud.account.integrations': 'Integrations',
        'ui.panel.config.cloud.account.integrations_introduction':
          'Integrations for Home Assistant Cloud allow you to connect with services in the cloud without having to expose your Home Assistant instance publicly on the internet.',
        'ui.panel.config.cloud.account.integrations_introduction2':
          'Check the website for ',
        'ui.panel.config.cloud.account.integrations_link_all_features':
          ' all available features',
        'ui.panel.config.cloud.account.connected': 'Connected',
        'ui.panel.config.cloud.account.connecting': 'Connecting…',
        'ui.panel.config.cloud.account.not_connected': 'Not Connected',
        'ui.panel.config.cloud.account.fetching_subscription':
          'Fetching subscription…',
        'ui.panel.config.cloud.account.tts.title': 'Text to Speech',
        'ui.panel.config.cloud.account.tts.info':
          'Bring personality to your home by having it speak to you by using our Text-to-Speech services. You can use this in automations and scripts by using the {service} service.',
        'ui.panel.config.cloud.account.tts.default_language':
          'Default language to use',
        'ui.panel.config.cloud.account.tts.male': 'Male',
        'ui.panel.config.cloud.account.tts.female': 'Female',
        'ui.panel.config.cloud.account.tts.try': 'Try',
        'ui.panel.config.cloud.account.tts.dialog.header': 'Try Text to Speech',
        'ui.panel.config.cloud.account.tts.dialog.example_message':
          'Hello {name}, you can play any text on any supported media player!',
        'ui.panel.config.cloud.account.tts.dialog.target': 'Target',
        'ui.panel.config.cloud.account.tts.dialog.target_browser': 'Browser',
        'ui.panel.config.cloud.account.tts.dialog.play': 'Play',
        'ui.panel.config.cloud.account.remote.title': 'Remote Control',
        'ui.panel.config.cloud.account.remote.connected': 'Connected',
        'ui.panel.config.cloud.account.remote.not_connected': 'Not Connected',
        'ui.panel.config.cloud.account.remote.reconnecting':
          'Not connected. Trying to reconnect.',
        'ui.panel.config.cloud.account.remote.access_is_being_prepared':
          "Remote control is being prepared. We will notify you when it's ready.",
        'ui.panel.config.cloud.account.remote.info':
          'Home Assistant Cloud provides a secure remote connection to your instance while away from home.',
        'ui.panel.config.cloud.account.remote.instance_is_available':
          'Your instance is available at',
        'ui.panel.config.cloud.account.remote.instance_will_be_available':
          'Your instance will be available at',
        'ui.panel.config.cloud.account.remote.link_learn_how_it_works':
          'Learn how it works',
        'ui.panel.config.cloud.account.remote.certificate_info':
          'Certificate Info',
        'ui.panel.config.cloud.account.alexa.title': 'Alexa',
        'ui.panel.config.cloud.account.alexa.info':
          "With the Alexa integration for Home Assistant Cloud you'll be able to control all your Home Assistant devices via any Alexa-enabled device.",
        'ui.panel.config.cloud.account.alexa.enable_ha_skill':
          'Enable the Home Assistant skill for Alexa',
        'ui.panel.config.cloud.account.alexa.config_documentation':
          'Configuration documentation',
        'ui.panel.config.cloud.account.alexa.enable_state_reporting':
          'Enable State Reporting',
        'ui.panel.config.cloud.account.alexa.info_state_reporting':
          'If you enable state reporting, Home Assistant will send all state changes of exposed entities to Amazon. This allows you to always see the latest states in the Alexa app and use the state changes to create routines.',
        'ui.panel.config.cloud.account.alexa.sync_entities':
          'Sync Entities to Amazon',
        'ui.panel.config.cloud.account.alexa.manage_entities':
          'Manage Entities',
        'ui.panel.config.cloud.account.alexa.sync_entities_error':
          'Failed to sync entities:',
        'ui.panel.config.cloud.account.alexa.state_reporting_error':
          'Unable to {enable_disable} report state.',
        'ui.panel.config.cloud.account.alexa.enable': 'enable',
        'ui.panel.config.cloud.account.alexa.disable': 'disable',
        'ui.panel.config.cloud.account.google.title': 'Google Assistant',
        'ui.panel.config.cloud.account.google.info':
          "With the Google Assistant integration for Home Assistant Cloud you'll be able to control all your Home Assistant devices via any Google Assistant-enabled device.",
        'ui.panel.config.cloud.account.google.enable_ha_skill':
          'Activate the Home Assistant Cloud skill for Google Assistant',
        'ui.panel.config.cloud.account.google.config_documentation':
          'Configuration documentation',
        'ui.panel.config.cloud.account.google.enable_state_reporting':
          'Enable State Reporting',
        'ui.panel.config.cloud.account.google.info_state_reporting':
          'If you enable state reporting, Home Assistant will send all state changes of exposed entities to Google. This allows you to always see the latest states in the Google app.',
        'ui.panel.config.cloud.account.google.security_devices':
          'Security Devices',
        'ui.panel.config.cloud.account.google.enter_pin_info':
          'Please enter a PIN to interact with security devices. Security devices are doors, garage doors and locks. You will be asked to say/enter this PIN when interacting with such devices via Google Assistant.',
        'ui.panel.config.cloud.account.google.devices_pin':
          'Security Devices PIN',
        'ui.panel.config.cloud.account.google.enter_pin_hint':
          'Enter a PIN to use security devices',
        'ui.panel.config.cloud.account.google.sync_entities':
          'Sync Entities to Google',
        'ui.panel.config.cloud.account.google.sync_entities_404_message':
          "Failed to sync your entities to Google, ask Google 'Hey Google, sync my devices' to sync your entities.",
        'ui.panel.config.cloud.account.google.manage_entities':
          'Manage Entities',
        'ui.panel.config.cloud.account.google.enter_pin_error':
          'Unable to store PIN:',
        'ui.panel.config.cloud.account.google.not_configured_title':
          'Google Assistant is not activated',
        'ui.panel.config.cloud.account.google.not_configured_text':
          'Before you can use Google Assistant, you need to activate the Home Assistant Cloud skill for Google Assistant in the Google Home app.',
        'ui.panel.config.cloud.account.webhooks.title': 'Webhooks',
        'ui.panel.config.cloud.account.webhooks.info':
          'Anything that is configured to be triggered by a webhook can be given a publicly accessible URL to allow you to send data back to Home Assistant from anywhere, without exposing your instance to the internet.',
        'ui.panel.config.cloud.account.webhooks.no_hooks_yet':
          'Looks like you have no webhooks yet. Get started by configuring a ',
        'ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_integration':
          'webhook-based integration',
        'ui.panel.config.cloud.account.webhooks.no_hooks_yet2':
          ' or by creating a ',
        'ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_automation':
          'webhook automation',
        'ui.panel.config.cloud.account.webhooks.link_learn_more':
          'Learn more about creating webhook-powered automations.',
        'ui.panel.config.cloud.account.webhooks.loading': 'Loading…',
        'ui.panel.config.cloud.account.webhooks.manage': 'Manage',
        'ui.panel.config.cloud.account.webhooks.disable_hook_error_msg':
          'Failed to disable webhook:',
        'ui.panel.config.cloud.alexa.title': 'Alexa',
        'ui.panel.config.cloud.alexa.banner':
          'Editing which entities are exposed via this UI is disabled because you have configured entity filters in configuration.yaml.',
        'ui.panel.config.cloud.alexa.exposed_entities': 'Exposed entities',
        'ui.panel.config.cloud.alexa.not_exposed_entities':
          'Not exposed entities',
        'ui.panel.config.cloud.alexa.manage_domains': 'Manage domains',
        'ui.panel.config.cloud.alexa.expose_entity': 'Expose entity',
        'ui.panel.config.cloud.alexa.dont_expose_entity': "Don't expose entity",
        'ui.panel.config.cloud.alexa.follow_domain': 'Follow domain',
        'ui.panel.config.cloud.alexa.exposed': '{selected} exposed',
        'ui.panel.config.cloud.alexa.not_exposed': '{selected} not exposed',
        'ui.panel.config.cloud.alexa.expose': 'Expose to Alexa',
        'ui.panel.config.cloud.dialog_certificate.certificate_information':
          'Certificate Information',
        'ui.panel.config.cloud.dialog_certificate.certificate_expiration_date':
          'Certificate expiration date:',
        'ui.panel.config.cloud.dialog_certificate.will_be_auto_renewed':
          'will be automatically renewed',
        'ui.panel.config.cloud.dialog_certificate.fingerprint':
          'Certificate fingerprint:',
        'ui.panel.config.cloud.dialog_certificate.close': 'Close',
        'ui.panel.config.cloud.google.title': 'Google Assistant',
        'ui.panel.config.cloud.google.expose': 'Expose to Google Assistant',
        'ui.panel.config.cloud.google.disable_2FA':
          'Disable two factor authentication',
        'ui.panel.config.cloud.google.banner':
          'Editing which entities are exposed via this UI is disabled because you have configured entity filters in configuration.yaml.',
        'ui.panel.config.cloud.google.exposed_entities': 'Exposed entities',
        'ui.panel.config.cloud.google.not_exposed_entities':
          'Not exposed entities',
        'ui.panel.config.cloud.google.manage_domains': 'Manage domains',
        'ui.panel.config.cloud.google.expose_entity': 'Expose entity',
        'ui.panel.config.cloud.google.dont_expose_entity':
          "Don't expose entity",
        'ui.panel.config.cloud.google.follow_domain': 'Follow domain',
        'ui.panel.config.cloud.google.exposed': '{selected} exposed',
        'ui.panel.config.cloud.google.not_exposed': '{selected} not exposed',
        'ui.panel.config.cloud.google.sync_to_google':
          'Synchronizing changes to Google.',
        'ui.panel.config.cloud.dialog_cloudhook.webhook_for':
          'Webhook for {name}',
        'ui.panel.config.cloud.dialog_cloudhook.available_at':
          'The webhook is available at the following URL:',
        'ui.panel.config.cloud.dialog_cloudhook.managed_by_integration':
          'This webhook is managed by an integration and cannot be disabled.',
        'ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook':
          'If you no longer want to use this webhook, you can',
        'ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook':
          'disable it',
        'ui.panel.config.cloud.dialog_cloudhook.view_documentation':
          'View documentation',
        'ui.panel.config.cloud.dialog_cloudhook.close': 'Close',
        'ui.panel.config.cloud.dialog_cloudhook.confirm_disable':
          'Are you sure you want to disable this webhook?',
        'ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard':
          'Copied to clipboard',
        'ui.panel.config.devices.add_prompt':
          'No {name} have been added using this device yet. You can add one by clicking the + button above.',
        'ui.panel.config.devices.caption': 'Devices',
        'ui.panel.config.devices.description': 'Manage configured devices',
        'ui.panel.config.devices.device_info': 'Device info',
        'ui.panel.config.devices.edit_settings': 'Edit settings',
        'ui.panel.config.devices.unnamed_device': 'Unnamed device',
        'ui.panel.config.devices.unknown_error': 'Unknown error',
        'ui.panel.config.devices.name': 'Name',
        'ui.panel.config.devices.update': 'Update',
        'ui.panel.config.devices.no_devices': 'No devices',
        'ui.panel.config.devices.enabled_label': 'Enable device',
        'ui.panel.config.devices.enabled_cause':
          'The device is disabled by {cause}.',
        'ui.panel.config.devices.disabled_by.user': 'User',
        'ui.panel.config.devices.disabled_by.integration': 'Integration',
        'ui.panel.config.devices.disabled_by.config_entry': 'Config entry',
        'ui.panel.config.devices.enabled_description':
          'Disabled devices will not be shown and entities belonging to the device will be disabled and not added to Home Assistant.',
        'ui.panel.config.devices.open_configuration_url_device': 'Visit device',
        'ui.panel.config.devices.open_configuration_url_service':
          'Visit service',
        'ui.panel.config.devices.automation.automations': 'Automations',
        'ui.panel.config.devices.automation.no_automations': 'No automations',
        'ui.panel.config.devices.automation.unknown_automation':
          'Unknown automation',
        'ui.panel.config.devices.automation.create':
          'Create automation with device',
        'ui.panel.config.devices.automation.create_disable':
          "Can't create automation with disabled device",
        'ui.panel.config.devices.automation.triggers.caption':
          'Do something when…',
        'ui.panel.config.devices.automation.triggers.no_triggers':
          'No triggers',
        'ui.panel.config.devices.automation.triggers.unknown_trigger':
          'Unknown trigger',
        'ui.panel.config.devices.automation.conditions.caption':
          'Only do something if…',
        'ui.panel.config.devices.automation.conditions.no_conditions':
          'No conditions',
        'ui.panel.config.devices.automation.conditions.unknown_condition':
          'Unknown condition',
        'ui.panel.config.devices.automation.actions.caption':
          'When something is triggered…',
        'ui.panel.config.devices.automation.actions.no_actions': 'No actions',
        'ui.panel.config.devices.automation.actions.unknown_action':
          'Unknown action',
        'ui.panel.config.devices.automation.no_device_automations':
          'There are no automations available for this device.',
        'ui.panel.config.devices.script.scripts': 'Scripts',
        'ui.panel.config.devices.script.no_scripts': 'No scripts',
        'ui.panel.config.devices.script.create': 'Create script with device',
        'ui.panel.config.devices.script.create_disable':
          "Can't create script with disabled device",
        'ui.panel.config.devices.scene.scenes': 'Scenes',
        'ui.panel.config.devices.scene.no_scenes': 'No scenes',
        'ui.panel.config.devices.scene.create': 'Create scene with device',
        'ui.panel.config.devices.scene.create_disable':
          "Can't create scene with disabled device",
        'ui.panel.config.devices.cant_edit':
          'You can only edit items that are created in the UI.',
        'ui.panel.config.devices.device_not_found': 'Device not found.',
        'ui.panel.config.devices.entities.entities': 'Entities',
        'ui.panel.config.devices.entities.control': 'Controls',
        'ui.panel.config.devices.entities.sensor': 'Sensors',
        'ui.panel.config.devices.entities.diagnostic': 'Diagnostic',
        'ui.panel.config.devices.entities.config': 'Configuration',
        'ui.panel.config.devices.entities.add_entities_lovelace':
          'Add to Lovelace',
        'ui.panel.config.devices.entities.none': 'This device has no entities',
        'ui.panel.config.devices.entities.hide_disabled': 'Hide disabled',
        'ui.panel.config.devices.entities.disabled_entities':
          '+{count} {count, plural,\n  one {disabled entity}\n  other {disabled entities}\n}',
        'ui.panel.config.devices.scripts': 'Scripts',
        'ui.panel.config.devices.scenes': 'Scenes',
        'ui.panel.config.devices.confirm_rename_entity_ids':
          'Do you also want to rename the entity IDs of your entities?',
        'ui.panel.config.devices.confirm_rename_entity_ids_warning':
          'This will not change any configuration (like automations, scripts, scenes, dashboards) that is currently using these entities! You will have to update them yourself to use the new entity IDs!',
        'ui.panel.config.devices.confirm_disable_config_entry':
          'There are no more devices for the config entry {entry_name}, do you want to instead disable the config entry?',
        'ui.panel.config.devices.update_device_error':
          'Updating the device failed',
        'ui.panel.config.devices.disabled': 'Disabled',
        'ui.panel.config.devices.data_table.device': 'Device',
        'ui.panel.config.devices.data_table.manufacturer': 'Manufacturer',
        'ui.panel.config.devices.data_table.model': 'Model',
        'ui.panel.config.devices.data_table.area': 'Area',
        'ui.panel.config.devices.data_table.integration': 'Integration',
        'ui.panel.config.devices.data_table.battery': 'Battery',
        'ui.panel.config.devices.data_table.no_devices': 'No devices',
        'ui.panel.config.devices.delete': 'Delete',
        'ui.panel.config.devices.confirm_delete':
          'Are you sure you want to delete this device?',
        'ui.panel.config.devices.picker.search': 'Search devices',
        'ui.panel.config.devices.picker.filter.filter': 'Filter',
        'ui.panel.config.devices.picker.filter.show_disabled':
          'Show disabled devices',
        'ui.panel.config.devices.picker.filter.hidden_devices':
          '{number} hidden {number, plural,\n  one {device}\n  other {devices}\n}',
        'ui.panel.config.devices.picker.filter.show_all': 'Show all',
        'ui.panel.config.entities.caption': 'Entities',
        'ui.panel.config.entities.description': 'Manage known entities',
        'ui.panel.config.entities.picker.header': 'Entities',
        'ui.panel.config.entities.picker.introduction':
          'Home Assistant keeps a registry of every entity it has ever seen that can be uniquely identified. Each of these entities will have an entity ID assigned which will be reserved for just this entity.',
        'ui.panel.config.entities.picker.introduction2':
          'Use the entity registry to override the name, change the entity ID or remove the entry from Home Assistant.',
        'ui.panel.config.entities.picker.search': 'Search entities',
        'ui.panel.config.entities.picker.filter.filter': 'Filter',
        'ui.panel.config.entities.picker.filter.show_disabled':
          'Show disabled entities',
        'ui.panel.config.entities.picker.filter.show_unavailable':
          'Show unavailable entities',
        'ui.panel.config.entities.picker.filter.show_readonly':
          'Show read-only entities',
        'ui.panel.config.entities.picker.filter.hidden_entities':
          '{number} hidden {number, plural,\n  one {entity}\n  other {entities}\n}',
        'ui.panel.config.entities.picker.filter.show_all': 'Show all',
        'ui.panel.config.entities.picker.status.restored': 'Restored',
        'ui.panel.config.entities.picker.status.unavailable': 'Unavailable',
        'ui.panel.config.entities.picker.status.disabled': 'Disabled',
        'ui.panel.config.entities.picker.status.readonly': 'Read-only',
        'ui.panel.config.entities.picker.status.ok': 'Ok',
        'ui.panel.config.entities.picker.headers.name': 'Name',
        'ui.panel.config.entities.picker.headers.entity_id': 'Entity ID',
        'ui.panel.config.entities.picker.headers.integration': 'Integration',
        'ui.panel.config.entities.picker.headers.area': 'Area',
        'ui.panel.config.entities.picker.headers.disabled_by': 'Disabled by',
        'ui.panel.config.entities.picker.headers.status': 'Status',
        'ui.panel.config.entities.picker.selected': '{number} selected',
        'ui.panel.config.entities.picker.enable_selected.button':
          'Enable selected',
        'ui.panel.config.entities.picker.enable_selected.confirm_title':
          'Do you want to enable {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
        'ui.panel.config.entities.picker.enable_selected.confirm_text':
          'This will make them available in Home Assistant again if they are now disabled.',
        'ui.panel.config.entities.picker.disable_selected.button':
          'Disable selected',
        'ui.panel.config.entities.picker.disable_selected.confirm_title':
          'Do you want to disable {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
        'ui.panel.config.entities.picker.disable_selected.confirm_text':
          'Disabled entities will not be added to Home Assistant.',
        'ui.panel.config.entities.picker.remove_selected.button':
          'Remove selected',
        'ui.panel.config.entities.picker.remove_selected.confirm_title':
          'Do you want to remove {number} {number, plural,\n  one {entity}\n  other {entities}\n}?',
        'ui.panel.config.entities.picker.remove_selected.confirm_partly_title':
          'Only {number} {number, plural,\n  one {selected entity}\n  other {selected entities}\n} can be removed.',
        'ui.panel.config.entities.picker.remove_selected.confirm_text':
          'You should remove them from your Lovelace config and automations if they contain these entities.',
        'ui.panel.config.entities.picker.remove_selected.confirm_partly_text':
          'You can only remove {removable} of the selected {selected} entities. Entities can only be removed when the integration is no longer providing the entities. Sometimes you have to restart Home Assistant before you can remove the entities of a removed integration. Are you sure you want to remove the removable entities?',
        'ui.panel.config.person.caption': 'People',
        'ui.panel.config.person.description':
          'Manage the people that Home Assistant tracks',
        'ui.panel.config.person.introduction':
          'Here you can define each person of interest in Home Assistant.',
        'ui.panel.config.person.note_about_persons_configured_in_yaml':
          'Note: people configured via configuration.yaml cannot be edited via the UI.',
        'ui.panel.config.person.learn_more': 'Learn more about people',
        'ui.panel.config.person.no_persons_created_yet':
          'Looks like you have not created any people yet.',
        'ui.panel.config.person.create_person': 'Create Person',
        'ui.panel.config.person.add_person': 'Add Person',
        'ui.panel.config.person.confirm_delete':
          'Are you sure you want to delete this person?',
        'ui.panel.config.person.confirm_delete2':
          'All devices belonging to this person will become unassigned.',
        'ui.panel.config.person.person_not_found_title': 'Person Not Found',
        'ui.panel.config.person.person_not_found':
          "We couldn't find the person you were trying to edit.",
        'ui.panel.config.person.detail.new_person': 'New Person',
        'ui.panel.config.person.detail.name': 'Name',
        'ui.panel.config.person.detail.name_error_msg': 'Name is required',
        'ui.panel.config.person.detail.linked_user': 'Linked User',
        'ui.panel.config.person.detail.device_tracker_intro':
          'Select the devices that belong to this person.',
        'ui.panel.config.person.detail.no_device_tracker_available_intro':
          'When you have devices that indicate the presence of a person, you will be able to assign them to a person here. You can add your first device by adding a presence-detection integration from the integrations page.',
        'ui.panel.config.person.detail.link_presence_detection_integrations':
          'Presence Detection Integrations',
        'ui.panel.config.person.detail.link_integrations_page':
          'Integrations page',
        'ui.panel.config.person.detail.device_tracker_picked': 'Track Device',
        'ui.panel.config.person.detail.device_tracker_pick':
          'Pick device to track',
        'ui.panel.config.person.detail.delete': 'Delete',
        'ui.panel.config.person.detail.create': 'Create',
        'ui.panel.config.person.detail.update': 'Update',
        'ui.panel.config.person.detail.confirm_delete_user':
          'Are you sure you want to delete the user account for {name}? You can still track the user, but the person will no longer be able to login.',
        'ui.panel.config.person.detail.admin': 'Administrator',
        'ui.panel.config.person.detail.local_only':
          'Can only log in from the local network',
        'ui.panel.config.person.detail.allow_login': 'Allow person to login',
        'ui.panel.config.zone.caption': 'Zones',
        'ui.panel.config.zone.description':
          'Manage the zones you want to track people in',
        'ui.panel.config.zone.introduction':
          'Zones allow you to specify certain regions on earth. When a person is within a zone, the state will take the name from the zone. Zones can also be used as a trigger or condition inside automation setups.',
        'ui.panel.config.zone.no_zones_created_yet':
          'Looks like you have not created any zones yet.',
        'ui.panel.config.zone.create_zone': 'Create Zone',
        'ui.panel.config.zone.add_zone': 'Add Zone',
        'ui.panel.config.zone.edit_zone': 'Edit Zone',
        'ui.panel.config.zone.confirm_delete':
          'Are you sure you want to delete this zone?',
        'ui.panel.config.zone.configured_in_yaml':
          'Zones configured via configuration.yaml cannot be edited via the UI.',
        'ui.panel.config.zone.edit_home_zone':
          "The radius of the Home zone can't be edited from the frontend yet. Drag the marker on the map to move the home zone.",
        'ui.panel.config.zone.edit_home_zone_narrow':
          "The radius of the Home zone can't be edited from the frontend yet. The location can be changed from the general configuration.",
        'ui.panel.config.zone.go_to_core_config':
          'Go to general configuration?',
        'ui.panel.config.zone.home_zone_core_config':
          "The location of your home zone is editable from the general configuration page. The radius of the Home zone can't be edited from the frontend yet. Do you want to go to the general configuration?",
        'ui.panel.config.zone.detail.new_zone': 'New Zone',
        'ui.panel.config.zone.detail.name': 'Name',
        'ui.panel.config.zone.detail.icon': 'Icon',
        'ui.panel.config.zone.detail.icon_error_msg':
          "Icon should be in the format ''prefix:iconname'', for example: ''mdi:home''",
        'ui.panel.config.zone.detail.radius': 'Radius',
        'ui.panel.config.zone.detail.latitude': 'Latitude',
        'ui.panel.config.zone.detail.longitude': 'Longitude',
        'ui.panel.config.zone.detail.passive': 'Passive',
        'ui.panel.config.zone.detail.passive_note':
          'Passive zones are hidden in the frontend and are not used as location for device trackers. This is useful if you just want to use it for automations.',
        'ui.panel.config.zone.detail.required_error_msg':
          'This field is required',
        'ui.panel.config.zone.detail.delete': 'Delete',
        'ui.panel.config.zone.detail.create': 'Create',
        'ui.panel.config.zone.detail.update': 'Update',
        'ui.panel.config.integrations.caption': 'Integrations',
        'ui.panel.config.integrations.description':
          'Manage integrations with services or devices',
        'ui.panel.config.integrations.integration': 'integration',
        'ui.panel.config.integrations.discovered': 'Discovered',
        'ui.panel.config.integrations.attention': 'Attention required',
        'ui.panel.config.integrations.configured': 'Configured',
        'ui.panel.config.integrations.new': 'Set up a new integration',
        'ui.panel.config.integrations.confirm_new':
          'Do you want to set up {integration}?',
        'ui.panel.config.integrations.add_integration': 'Add integration',
        'ui.panel.config.integrations.no_integrations':
          "Seems like you don't have any integrations configured yet. Click on the button below to add your first integration!",
        'ui.panel.config.integrations.note_about_integrations':
          'No integrations matched your search, the integration you want to set up might not be available to set up via the UI yet.',
        'ui.panel.config.integrations.note_about_website_reference':
          'More are available on the ',
        'ui.panel.config.integrations.home_assistant_website':
          'Home Assistant website',
        'ui.panel.config.integrations.configure': 'Configure',
        'ui.panel.config.integrations.reconfigure': 'Reconfigure',
        'ui.panel.config.integrations.none': 'Nothing configured yet',
        'ui.panel.config.integrations.none_found': 'No integrations found',
        'ui.panel.config.integrations.none_found_detail':
          'Adjust your search criteria.',
        'ui.panel.config.integrations.integration_not_found':
          'Integration not found.',
        'ui.panel.config.integrations.details': 'Integration details',
        'ui.panel.config.integrations.rename_dialog':
          'Edit the name of this config entry',
        'ui.panel.config.integrations.rename_input_label': 'Entry name',
        'ui.panel.config.integrations.search': 'Search integrations',
        'ui.panel.config.integrations.disable.show_disabled':
          'Show disabled integrations',
        'ui.panel.config.integrations.disable.disabled_integrations':
          '{number} disabled',
        'ui.panel.config.integrations.disable.show': 'Show',
        'ui.panel.config.integrations.ignore.ignore': 'Ignore',
        'ui.panel.config.integrations.ignore.confirm_ignore_title':
          'Ignore discovery of {name}?',
        'ui.panel.config.integrations.ignore.confirm_ignore':
          "Are you sure you don't want to set up this integration? You can undo this by clicking the 'Show ignored integrations' in the overflow menu on the top right.",
        'ui.panel.config.integrations.ignore.show_ignored':
          'Show ignored integrations',
        'ui.panel.config.integrations.ignore.ignored': 'Ignored',
        'ui.panel.config.integrations.ignore.confirm_delete_ignore_title':
          'Stop ignoring {name}?',
        'ui.panel.config.integrations.ignore.confirm_delete_ignore':
          'This will make the integration appear in your discovered integrations again when it gets discovered. This might require a restart or take some time.',
        'ui.panel.config.integrations.ignore.stop_ignore': 'Stop ignoring',
        'ui.panel.config.integrations.config_entry.devices':
          '{count} {count, plural,\n  one {device}\n  other {devices}\n}',
        'ui.panel.config.integrations.config_entry.entities':
          '{count} {count, plural,\n  one {entity}\n  other {entities}\n}',
        'ui.panel.config.integrations.config_entry.services':
          '{count} {count, plural,\n  one {service}\n  other {services}\n}',
        'ui.panel.config.integrations.config_entry.rename': 'Rename',
        'ui.panel.config.integrations.config_entry.configure': 'Configure',
        'ui.panel.config.integrations.config_entry.system_options':
          'System options',
        'ui.panel.config.integrations.config_entry.documentation':
          'Documentation',
        'ui.panel.config.integrations.config_entry.delete': 'Delete',
        'ui.panel.config.integrations.config_entry.delete_confirm':
          'Are you sure you want to delete the {title} integration?',
        'ui.panel.config.integrations.config_entry.reload': 'Reload',
        'ui.panel.config.integrations.config_entry.restart_confirm':
          'Restart Home Assistant to finish removing this integration',
        'ui.panel.config.integrations.config_entry.reload_confirm':
          'The integration was reloaded',
        'ui.panel.config.integrations.config_entry.reload_restart_confirm':
          'Restart Home Assistant to finish reloading this integration',
        'ui.panel.config.integrations.config_entry.disable_restart_confirm':
          'Restart Home Assistant to finish disabling this integration',
        'ui.panel.config.integrations.config_entry.enable_restart_confirm':
          'Restart Home Assistant to finish enabling this integration',
        'ui.panel.config.integrations.config_entry.disable_error':
          'Enabling or disabling of the integration failed',
        'ui.panel.config.integrations.config_entry.manuf': 'by {manufacturer}',
        'ui.panel.config.integrations.config_entry.via': 'Connected via',
        'ui.panel.config.integrations.config_entry.firmware':
          'Firmware: {version}',
        'ui.panel.config.integrations.config_entry.hardware':
          'Hardware: {version}',
        'ui.panel.config.integrations.config_entry.unnamed_entry':
          'Unnamed entry',
        'ui.panel.config.integrations.config_entry.unknown_via_device':
          'Unknown device',
        'ui.panel.config.integrations.config_entry.area': 'In {area}',
        'ui.panel.config.integrations.config_entry.no_area': 'No Area',
        'ui.panel.config.integrations.config_entry.not_loaded': 'Not loaded',
        'ui.panel.config.integrations.config_entry.check_the_logs':
          'Check the logs',
        'ui.panel.config.integrations.config_entry.disable.disabled':
          'Disabled',
        'ui.panel.config.integrations.config_entry.disable.disabled_cause':
          'Disabled by {cause}',
        'ui.panel.config.integrations.config_entry.disable.disabled_by.user':
          'user',
        'ui.panel.config.integrations.config_entry.disable.disabled_by.integration':
          'integration',
        'ui.panel.config.integrations.config_entry.disable.disabled_by.device':
          'device',
        'ui.panel.config.integrations.config_entry.disable.disable_confirm':
          'Are you sure you want to disable this config entry? Its devices and entities will be disabled.',
        'ui.panel.config.integrations.config_entry.provided_by_custom_integration':
          'Provided by a custom integration',
        'ui.panel.config.integrations.config_entry.depends_on_cloud':
          'Depends on the cloud',
        'ui.panel.config.integrations.config_entry.disabled_polling':
          'Automatic polling for updated data disabled',
        'ui.panel.config.integrations.config_entry.state.loaded': 'Loaded',
        'ui.panel.config.integrations.config_entry.state.setup_error':
          'Failed to set up',
        'ui.panel.config.integrations.config_entry.state.migration_error':
          'Migration error',
        'ui.panel.config.integrations.config_entry.state.setup_retry':
          'Retrying setup',
        'ui.panel.config.integrations.config_entry.state.not_loaded':
          'Not loaded',
        'ui.panel.config.integrations.config_entry.state.failed_unload':
          'Failed to unload',
        'ui.panel.config.integrations.config_flow.aborted': 'Aborted',
        'ui.panel.config.integrations.config_flow.close': 'Close',
        'ui.panel.config.integrations.config_flow.dismiss': 'Dismiss dialog',
        'ui.panel.config.integrations.config_flow.finish': 'Finish',
        'ui.panel.config.integrations.config_flow.submit': 'Submit',
        'ui.panel.config.integrations.config_flow.next': 'Next',
        'ui.panel.config.integrations.config_flow.not_all_required_fields':
          'Not all required fields are filled in.',
        'ui.panel.config.integrations.config_flow.error_saving_area':
          'Error saving area: {error}',
        'ui.panel.config.integrations.config_flow.created_config':
          'Created configuration for {name}.',
        'ui.panel.config.integrations.config_flow.external_step.description':
          'This step requires you to visit an external website to be completed.',
        'ui.panel.config.integrations.config_flow.external_step.open_site':
          'Open website',
        'ui.panel.config.integrations.config_flow.pick_flow_step.title':
          'We discovered these, want to set them up?',
        'ui.panel.config.integrations.config_flow.pick_flow_step.new_flow':
          'No, set up an other instance of {integration}',
        'ui.panel.config.integrations.config_flow.loading.loading_flow':
          'Please wait while {integration} is being setup',
        'ui.panel.config.integrations.config_flow.loading.loading_step':
          'Loading next step for {integration}',
        'ui.panel.config.integrations.config_flow.loading.fallback_title':
          'the integration',
        'ui.panel.config.integrations.config_flow.error': 'Error',
        'ui.panel.config.integrations.config_flow.could_not_load':
          'Config flow could not be loaded',
        'ui.panel.config.integrations.config_flow.not_loaded':
          'The integration could not be loaded, try to restart Home Assistant.',
        'ui.panel.config.users.caption': 'Users',
        'ui.panel.config.users.description':
          'Manage the Home Assistant user accounts',
        'ui.panel.config.users.users_privileges_note':
          "The user group feature is a work in progress. The user will be unable to administer the instance via the UI. We're still auditing all management API endpoints to ensure that they correctly limit access to administrators.",
        'ui.panel.config.users.picker.headers.name': 'Display name',
        'ui.panel.config.users.picker.headers.username': 'Username',
        'ui.panel.config.users.picker.headers.group': 'Group',
        'ui.panel.config.users.picker.headers.system': 'System generated',
        'ui.panel.config.users.picker.headers.is_active': 'Active',
        'ui.panel.config.users.picker.headers.is_owner': 'Owner',
        'ui.panel.config.users.picker.headers.local': 'Local only',
        'ui.panel.config.users.picker.add_user': 'Add user',
        'ui.panel.config.users.editor.caption': 'View user',
        'ui.panel.config.users.editor.name': 'Display name',
        'ui.panel.config.users.editor.username': 'Username',
        'ui.panel.config.users.editor.change_password': 'Change password',
        'ui.panel.config.users.editor.new_password': 'New Password',
        'ui.panel.config.users.editor.password_changed':
          'Password was changed successfully',
        'ui.panel.config.users.editor.activate_user': 'Activate user',
        'ui.panel.config.users.editor.deactivate_user': 'Deactivate user',
        'ui.panel.config.users.editor.delete_user': 'Delete user',
        'ui.panel.config.users.editor.update_user': 'Update',
        'ui.panel.config.users.editor.id': 'ID',
        'ui.panel.config.users.editor.owner': 'Owner',
        'ui.panel.config.users.editor.admin': 'Administrator',
        'ui.panel.config.users.editor.group': 'Group',
        'ui.panel.config.users.editor.active': 'Active',
        'ui.panel.config.users.editor.local_only':
          'Can only log in from the local network',
        'ui.panel.config.users.editor.system_generated': 'System generated',
        'ui.panel.config.users.editor.system_generated_users_not_removable':
          'Unable to remove system generated users.',
        'ui.panel.config.users.editor.system_generated_users_not_editable':
          'Unable to update system generated users.',
        'ui.panel.config.users.editor.unnamed_user': 'Unnamed User',
        'ui.panel.config.users.editor.confirm_user_deletion':
          'Are you sure you want to delete {name}?',
        'ui.panel.config.users.editor.active_tooltip':
          'Controls if user can login',
        'ui.panel.config.users.add_user.caption': 'Add user',
        'ui.panel.config.users.add_user.password': 'Password',
        'ui.panel.config.users.add_user.password_confirm': 'Confirm Password',
        'ui.panel.config.users.add_user.password_not_match':
          "Passwords don't match",
        'ui.panel.config.users.add_user.local_only': 'Local only',
        'ui.panel.config.users.add_user.create': 'Create',
        'ui.panel.config.mqtt.title': 'MQTT',
        'ui.panel.config.mqtt.description_publish': 'Publish a packet',
        'ui.panel.config.mqtt.topic': 'topic',
        'ui.panel.config.mqtt.payload': 'Payload (template allowed)',
        'ui.panel.config.mqtt.publish': 'Publish',
        'ui.panel.config.mqtt.description_listen': 'Listen to a topic',
        'ui.panel.config.mqtt.listening_to': 'Listening to',
        'ui.panel.config.mqtt.subscribe_to': 'Topic to subscribe to',
        'ui.panel.config.mqtt.start_listening': 'Start listening',
        'ui.panel.config.mqtt.stop_listening': 'Stop listening',
        'ui.panel.config.mqtt.message_received':
          'Message {id} received on {topic} at {time}:',
        'ui.panel.config.ozw.common.zwave': 'Z-Wave',
        'ui.panel.config.ozw.common.node_id': 'Node ID',
        'ui.panel.config.ozw.common.ozw_instance': 'OpenZWave Instance',
        'ui.panel.config.ozw.common.instance': 'Instance',
        'ui.panel.config.ozw.common.controller': 'Controller',
        'ui.panel.config.ozw.common.network': 'Network',
        'ui.panel.config.ozw.common.wakeup_instructions':
          'Wake-up Instructions',
        'ui.panel.config.ozw.common.query_stage': 'Query Stage',
        'ui.panel.config.ozw.device_info.zwave_info': 'Z-Wave Info',
        'ui.panel.config.ozw.device_info.stage': 'Stage',
        'ui.panel.config.ozw.device_info.node_failed': 'Node Failed',
        'ui.panel.config.ozw.node_query_stages.protocolinfo':
          'Obtaining basic Z-Wave capabilities of this node from the controller',
        'ui.panel.config.ozw.node_query_stages.probe':
          'Checking if the node is awake/alive',
        'ui.panel.config.ozw.node_query_stages.wakeup':
          'Setting up support for wake-up queues and messages',
        'ui.panel.config.ozw.node_query_stages.manufacturerspecific1':
          'Obtaining manufacturer and product ID codes from the node',
        'ui.panel.config.ozw.node_query_stages.nodeinfo':
          'Obtaining supported command classes from the node',
        'ui.panel.config.ozw.node_query_stages.nodeplusinfo':
          'Obtaining Z-Wave+ information from the node',
        'ui.panel.config.ozw.node_query_stages.manufacturerspecific2':
          'Obtaining additional manufacturer and product ID codes from the node',
        'ui.panel.config.ozw.node_query_stages.versions':
          'Obtaining information about firmware and command class versions',
        'ui.panel.config.ozw.node_query_stages.instances':
          'Obtaining details about what instances or channels a device supports',
        'ui.panel.config.ozw.node_query_stages.static':
          'Obtaining static values from the device',
        'ui.panel.config.ozw.node_query_stages.cacheload':
          'Loading information from the OpenZWave cache file. Battery nodes will stay at this stage until the node wakes up.',
        'ui.panel.config.ozw.node_query_stages.associations':
          'Refreshing association groups and memberships',
        'ui.panel.config.ozw.node_query_stages.neighbors':
          "Obtaining a list of the node's neighbors",
        'ui.panel.config.ozw.node_query_stages.session':
          'Obtaining infrequently changing values from the node',
        'ui.panel.config.ozw.node_query_stages.dynamic':
          'Obtaining frequently changing values from the node',
        'ui.panel.config.ozw.node_query_stages.configuration':
          'Obtaining configuration values from the node',
        'ui.panel.config.ozw.node_query_stages.complete':
          'Interview process is complete',
        'ui.panel.config.ozw.refresh_node.button': 'Refresh Node',
        'ui.panel.config.ozw.refresh_node.title': 'Refresh Node Information',
        'ui.panel.config.ozw.refresh_node.complete': 'Node Refresh Complete',
        'ui.panel.config.ozw.refresh_node.description':
          "This will tell OpenZWave to re-interview a node and update the node's command classes, capabilities, and values.",
        'ui.panel.config.ozw.refresh_node.battery_note':
          'If the node is battery powered, be sure to wake it before proceeding',
        'ui.panel.config.ozw.refresh_node.wakeup_header':
          'Wake-up Instructions for',
        'ui.panel.config.ozw.refresh_node.wakeup_instructions_source':
          'Wake-up instructions are sourced from the OpenZWave community device database.',
        'ui.panel.config.ozw.refresh_node.start_refresh_button':
          'Start Refresh',
        'ui.panel.config.ozw.refresh_node.refreshing_description':
          'Refreshing node information…',
        'ui.panel.config.ozw.refresh_node.node_status': 'Node Status',
        'ui.panel.config.ozw.refresh_node.step': 'Step',
        'ui.panel.config.ozw.network_status.online': 'Online',
        'ui.panel.config.ozw.network_status.offline': 'Offline',
        'ui.panel.config.ozw.network_status.starting': 'Starting',
        'ui.panel.config.ozw.network_status.unknown': 'Unknown',
        'ui.panel.config.ozw.network_status.details.driverallnodesqueried':
          'All nodes have been queried',
        'ui.panel.config.ozw.network_status.details.driverallnodesqueriedsomedead':
          'All nodes have been queried. Some nodes were found dead',
        'ui.panel.config.ozw.network_status.details.driverawakenodesqueries':
          'All awake nodes have been queried',
        'ui.panel.config.ozw.network_status.details.driverremoved':
          'The driver has been removed',
        'ui.panel.config.ozw.network_status.details.driverreset':
          'The driver has been reset',
        'ui.panel.config.ozw.network_status.details.driverfailed':
          'Failed to connect to Z-Wave controller',
        'ui.panel.config.ozw.network_status.details.driverready':
          'Initializing the Z-Wave controller',
        'ui.panel.config.ozw.network_status.details.ready': 'Ready to connect',
        'ui.panel.config.ozw.network_status.details.stopped':
          'OpenZWave stopped',
        'ui.panel.config.ozw.network_status.details.started':
          'Connected to MQTT',
        'ui.panel.config.ozw.network_status.details.starting':
          'Connecting to MQTT',
        'ui.panel.config.ozw.network_status.details.offline':
          'OZWDaemon offline',
        'ui.panel.config.ozw.navigation.select_instance': 'Select Instance',
        'ui.panel.config.ozw.navigation.network': 'Network',
        'ui.panel.config.ozw.navigation.nodes': 'Nodes',
        'ui.panel.config.ozw.navigation.node.dashboard': 'Dashboard',
        'ui.panel.config.ozw.navigation.node.config': 'Config',
        'ui.panel.config.ozw.select_instance.header':
          'Select an OpenZWave Instance',
        'ui.panel.config.ozw.select_instance.introduction':
          'You have more than one OpenZWave instance running. Which instance would you like to manage?',
        'ui.panel.config.ozw.select_instance.none_found':
          "We couldn't find an OpenZWave instance. If you believe this is incorrect, check your OpenZWave and MQTT setups and ensure that Home Assistant can communicate with your MQTT broker.",
        'ui.panel.config.ozw.network.header': 'Network Management',
        'ui.panel.config.ozw.network.introduction':
          'Manage network-wide functions.',
        'ui.panel.config.ozw.network.node_count': '{count} nodes',
        'ui.panel.config.ozw.nodes_table.id': 'ID',
        'ui.panel.config.ozw.nodes_table.manufacturer': 'Manufacturer',
        'ui.panel.config.ozw.nodes_table.model': 'Model',
        'ui.panel.config.ozw.nodes_table.query_stage': 'Query Stage',
        'ui.panel.config.ozw.nodes_table.zwave_plus': 'Z-Wave Plus',
        'ui.panel.config.ozw.nodes_table.failed': 'Failed',
        'ui.panel.config.ozw.node.button': 'Node Details',
        'ui.panel.config.ozw.node.not_found': 'Node not found',
        'ui.panel.config.ozw.node_config.header': 'Node Configuration',
        'ui.panel.config.ozw.node_config.introduction':
          'Manage the different configuration parameters for a Z-Wave node.',
        'ui.panel.config.ozw.node_config.help_source':
          'Config parameter descriptions and help text are provided by the OpenZWave project.',
        'ui.panel.config.ozw.node_config.wakeup_help':
          "Battery powered nodes must be awake to change their configuration. If the node is not awake, OpenZWave will attempt to update the node's configuration the next time it wakes up, which could be multiple hours (or days) later. Follow these steps to wake up your device:",
        'ui.panel.config.ozw.node_metadata.product_manual': 'Product Manual',
        'ui.panel.config.ozw.services.add_node': 'Add Node',
        'ui.panel.config.ozw.services.remove_node': 'Remove Node',
        'ui.panel.config.ozw.services.cancel_command': 'Cancel Command',
        'ui.panel.config.zha.common.clusters': 'Clusters',
        'ui.panel.config.zha.common.manufacturer_code_override':
          'Manufacturer Code Override',
        'ui.panel.config.zha.common.value': 'Value',
        'ui.panel.config.zha.configuration_page.shortcuts_title': 'Shortcuts',
        'ui.panel.config.zha.configuration_page.update_button':
          'Update Configuration',
        'ui.panel.config.zha.add_device_page.spinner':
          'Searching for ZHA Zigbee devices…',
        'ui.panel.config.zha.add_device_page.pairing_mode':
          'Make sure your devices are in pairing mode. Check the instructions of your device on how to do this.',
        'ui.panel.config.zha.add_device_page.discovered_text':
          'Devices will show up here once discovered.',
        'ui.panel.config.zha.add_device_page.no_devices_found':
          'No devices were found, make sure they are in pairing mode and keep them awake while discovering is running.',
        'ui.panel.config.zha.add_device_page.search_again': 'Search Again',
        'ui.panel.config.zha.add_device': 'Add Device',
        'ui.panel.config.zha.clusters.header': 'Clusters',
        'ui.panel.config.zha.clusters.help_cluster_dropdown':
          'Select a cluster to view attributes and commands.',
        'ui.panel.config.zha.clusters.introduction':
          'Clusters are the building blocks for Zigbee functionality. They separate functionality into logical units. There are client and server types and that are comprised of attributes and commands.',
        'ui.panel.config.zha.cluster_attributes.header': 'Cluster Attributes',
        'ui.panel.config.zha.cluster_attributes.introduction':
          'View and edit cluster attributes.',
        'ui.panel.config.zha.cluster_attributes.attributes_of_cluster':
          'Attributes of the selected cluster',
        'ui.panel.config.zha.cluster_attributes.get_zigbee_attribute':
          'Get Zigbee Attribute',
        'ui.panel.config.zha.cluster_attributes.set_zigbee_attribute':
          'Set Zigbee Attribute',
        'ui.panel.config.zha.cluster_attributes.help_attribute_dropdown':
          'Select an attribute to view or set its value.',
        'ui.panel.config.zha.cluster_attributes.help_get_zigbee_attribute':
          'Get the value for the selected attribute.',
        'ui.panel.config.zha.cluster_attributes.help_set_zigbee_attribute':
          'Set attribute value for the specified cluster on the specified entity.',
        'ui.panel.config.zha.cluster_commands.header': 'Cluster Commands',
        'ui.panel.config.zha.cluster_commands.introduction':
          'View and issue cluster commands.',
        'ui.panel.config.zha.cluster_commands.commands_of_cluster':
          'Commands of the selected cluster',
        'ui.panel.config.zha.cluster_commands.issue_zigbee_command':
          'Issue Zigbee Command',
        'ui.panel.config.zha.cluster_commands.help_command_dropdown':
          'Select a command to interact with.',
        'ui.panel.config.zha.device_pairing_card.PAIRED': 'Device Found',
        'ui.panel.config.zha.device_pairing_card.PAIRED_status_text':
          'Starting Interview',
        'ui.panel.config.zha.device_pairing_card.INTERVIEW_COMPLETE':
          'Interview Complete',
        'ui.panel.config.zha.device_pairing_card.INTERVIEW_COMPLETE_status_text':
          'Configuring',
        'ui.panel.config.zha.device_pairing_card.CONFIGURED':
          'Configuration Complete',
        'ui.panel.config.zha.device_pairing_card.CONFIGURED_status_text':
          'Initializing',
        'ui.panel.config.zha.device_pairing_card.INITIALIZED':
          'Initialization Complete',
        'ui.panel.config.zha.device_pairing_card.INITIALIZED_status_text':
          'The device is ready to use',
        'ui.panel.config.zha.network.caption': 'Network',
        'ui.panel.config.zha.groups.add_group': 'Add Group',
        'ui.panel.config.zha.groups.caption': 'Groups',
        'ui.panel.config.zha.groups.groups': 'Groups',
        'ui.panel.config.zha.groups.group_id': 'Group ID',
        'ui.panel.config.zha.groups.members': 'Members',
        'ui.panel.config.zha.groups.group_info': 'Group Information',
        'ui.panel.config.zha.groups.group_details':
          'Here are all the details for the selected Zigbee group.',
        'ui.panel.config.zha.groups.group_not_found': 'Group not found!',
        'ui.panel.config.zha.groups.add_members': 'Add Members',
        'ui.panel.config.zha.groups.remove_members': 'Remove Members',
        'ui.panel.config.zha.groups.removing_members': 'Removing Members',
        'ui.panel.config.zha.groups.create_group_details':
          'Enter the required details to create a new zigbee group',
        'ui.panel.config.zha.groups.group_name_placeholder': 'Group Name',
        'ui.panel.config.zha.groups.create_group':
          'Zigbee Home Automation - Create Group',
        'ui.panel.config.zha.groups.create': 'Create Group',
        'ui.panel.config.zha.groups.creating_group': 'Creating Group',
        'ui.panel.config.zha.groups.delete': 'Delete Group',
        'ui.panel.config.zha.visualization.header': 'Network Visualization',
        'ui.panel.config.zha.visualization.caption': 'Visualization',
        'ui.panel.config.zha.visualization.highlight_label':
          'Highlight Devices',
        'ui.panel.config.zha.visualization.zoom_label': 'Zoom To Device',
        'ui.panel.config.zha.visualization.auto_zoom': 'Auto Zoom',
        'ui.panel.config.zha.visualization.refresh_topology':
          'Refresh Topology',
        'ui.panel.config.zha.group_binding.header': 'Group Binding',
        'ui.panel.config.zha.group_binding.introduction':
          'Bind and unbind groups.',
        'ui.panel.config.zha.group_binding.group_picker_label':
          'Bindable Groups',
        'ui.panel.config.zha.group_binding.group_picker_help':
          'Select a group to issue a bind command.',
        'ui.panel.config.zha.group_binding.cluster_selection_help':
          'Select clusters to bind to the selected group.',
        'ui.panel.config.zha.group_binding.bind_button_label': 'Bind Group',
        'ui.panel.config.zha.group_binding.unbind_button_label': 'Unbind Group',
        'ui.panel.config.zha.group_binding.bind_button_help':
          'Bind the selected group to the selected device clusters.',
        'ui.panel.config.zha.group_binding.unbind_button_help':
          'Unbind the selected group from the selected device clusters.',
        'ui.panel.config.zwave.description': 'Manage your Z-Wave network',
        'ui.panel.config.zwave.learn_more': 'Learn more about Z-Wave',
        'ui.panel.config.zwave.common.value': 'Value',
        'ui.panel.config.zwave.common.instance': 'Instance',
        'ui.panel.config.zwave.common.index': 'Index',
        'ui.panel.config.zwave.common.unknown': 'unknown',
        'ui.panel.config.zwave.common.wakeup_interval': 'Wake-up Interval',
        'ui.panel.config.zwave.migration.zwave_js.header':
          'Migrate to Z-Wave JS',
        'ui.panel.config.zwave.migration.zwave_js.introduction':
          'This integration is no longer maintained, and we advise you to move to the new Z-Wave JS integration. This wizard will help you migrate from the legacy Z-Wave integration to the new Z-Wave JS integration.',
        'ui.panel.config.zwave.network_management.header':
          'Z-Wave Network Management',
        'ui.panel.config.zwave.network_management.introduction':
          "Run commands that affect the Z-Wave network. You won't get feedback on whether most commands succeeded, but you can check the OZW Log to try to find out.",
        'ui.panel.config.zwave.node_management.header':
          'Z-Wave Node Management',
        'ui.panel.config.zwave.node_management.introduction':
          'Run Z-Wave commands that affect a single node. Pick a node to see a list of available commands.',
        'ui.panel.config.zwave.node_management.nodes': 'Nodes',
        'ui.panel.config.zwave.node_management.nodes_hint':
          'Select node to view per-node options',
        'ui.panel.config.zwave.node_management.entities':
          'Entities of this node',
        'ui.panel.config.zwave.node_management.entity_info':
          'Entity Information',
        'ui.panel.config.zwave.node_management.exclude_entity':
          'Exclude this entity from Home Assistant',
        'ui.panel.config.zwave.node_management.pooling_intensity':
          'Polling intensity',
        'ui.panel.config.zwave.node_management.node_protection':
          'Node protection',
        'ui.panel.config.zwave.node_management.protection': 'Protection',
        'ui.panel.config.zwave.node_management.set_protection':
          'Set Protection',
        'ui.panel.config.zwave.node_management.node_group_associations':
          'Node group associations',
        'ui.panel.config.zwave.node_management.group': 'Group',
        'ui.panel.config.zwave.node_management.node_to_control':
          'Node to control',
        'ui.panel.config.zwave.node_management.nodes_in_group':
          'Other nodes in this group:',
        'ui.panel.config.zwave.node_management.max_associations':
          'Max Associations:',
        'ui.panel.config.zwave.node_management.add_to_group': 'Add to Group',
        'ui.panel.config.zwave.node_management.remove_from_group':
          'Remove from Group',
        'ui.panel.config.zwave.node_management.remove_broadcast':
          'Remove Broadcast',
        'ui.panel.config.zwave.ozw_log.header': 'OZW Log',
        'ui.panel.config.zwave.ozw_log.introduction':
          'View the log. 0 is the minimum (loads entire log) and 1000 is the maximum. Load will show a static log and tail will auto update with the last specified number of lines of the log.',
        'ui.panel.config.zwave.ozw_log.last_log_lines':
          'Number of last log lines',
        'ui.panel.config.zwave.ozw_log.load': 'Load',
        'ui.panel.config.zwave.ozw_log.tail': 'Tail',
        'ui.panel.config.zwave.network_status.network_stopped':
          'Z-Wave Network Stopped',
        'ui.panel.config.zwave.network_status.network_starting':
          'Starting Z-Wave Network…',
        'ui.panel.config.zwave.network_status.network_starting_note':
          'This may take a while depending on the size of your network.',
        'ui.panel.config.zwave.network_status.network_started':
          'Z-Wave Network Started',
        'ui.panel.config.zwave.network_status.network_started_note_some_queried':
          'Awake nodes have been queried. Sleeping nodes will be queried when they wake.',
        'ui.panel.config.zwave.network_status.network_started_note_all_queried':
          'All nodes have been queried.',
        'ui.panel.config.zwave.node_config.header':
          'Node Configuration Options',
        'ui.panel.config.zwave.node_config.seconds': 'seconds',
        'ui.panel.config.zwave.node_config.set_wakeup': 'Set Wake-up Interval',
        'ui.panel.config.zwave.node_config.config_parameter':
          'Configuration Parameter',
        'ui.panel.config.zwave.node_config.config_value': 'Configuration Value',
        'ui.panel.config.zwave.node_config.true': 'True',
        'ui.panel.config.zwave.node_config.false': 'False',
        'ui.panel.config.zwave.node_config.set_config_parameter':
          'Set Configuration Parameter',
        'ui.panel.config.zwave.values.header': 'Node Values',
        'ui.panel.config.zwave.services.start_network': 'Start Network',
        'ui.panel.config.zwave.services.stop_network': 'Stop Network',
        'ui.panel.config.zwave.services.heal_network': 'Heal Network',
        'ui.panel.config.zwave.services.test_network': 'Test Network',
        'ui.panel.config.zwave.services.soft_reset': 'Soft Reset',
        'ui.panel.config.zwave.services.save_config': 'Save Configuration',
        'ui.panel.config.zwave.services.add_node_secure': 'Add Node Secure',
        'ui.panel.config.zwave.services.add_node': 'Add Node',
        'ui.panel.config.zwave.services.remove_node': 'Remove Node',
        'ui.panel.config.zwave.services.cancel_command': 'Cancel Command',
        'ui.panel.config.zwave.services.refresh_node': 'Refresh Node',
        'ui.panel.config.zwave.services.remove_failed_node':
          'Remove Failed Node',
        'ui.panel.config.zwave.services.replace_failed_node':
          'Replace Failed Node',
        'ui.panel.config.zwave.services.print_node': 'Print Node',
        'ui.panel.config.zwave.services.heal_node': 'Heal Node',
        'ui.panel.config.zwave.services.test_node': 'Test Node',
        'ui.panel.config.zwave.services.node_info': 'Node Information',
        'ui.panel.config.zwave.services.refresh_entity': 'Refresh Entity',
        'ui.panel.config.zwave_js.navigation.network': 'Network',
        'ui.panel.config.zwave_js.navigation.logs': 'Logs',
        'ui.panel.config.zwave_js.common.network': 'Network',
        'ui.panel.config.zwave_js.common.node_id': 'Device ID',
        'ui.panel.config.zwave_js.common.home_id': 'Home ID',
        'ui.panel.config.zwave_js.common.source': 'Source',
        'ui.panel.config.zwave_js.common.back': 'Back',
        'ui.panel.config.zwave_js.common.add_node': 'Add device',
        'ui.panel.config.zwave_js.common.remove_node': 'Remove device',
        'ui.panel.config.zwave_js.common.reconfigure_server':
          'Re-configure Server',
        'ui.panel.config.zwave_js.common.heal_network': 'Heal Network',
        'ui.panel.config.zwave_js.dashboard.header':
          'Manage your Z-Wave Network',
        'ui.panel.config.zwave_js.dashboard.introduction':
          'Manage your Z-Wave network and Z-Wave devices',
        'ui.panel.config.zwave_js.dashboard.driver_version': 'Driver Version',
        'ui.panel.config.zwave_js.dashboard.server_version': 'Server Version',
        'ui.panel.config.zwave_js.dashboard.home_id': 'Home ID',
        'ui.panel.config.zwave_js.dashboard.server_url': 'Server URL',
        'ui.panel.config.zwave_js.dashboard.devices':
          '{count} {count, plural,\n  one {device}\n  other {devices}\n}',
        'ui.panel.config.zwave_js.dashboard.provisioned_devices':
          'Provisioned devices',
        'ui.panel.config.zwave_js.dashboard.not_ready': '{count} not ready',
        'ui.panel.config.zwave_js.dashboard.dump_debug': 'Download data',
        'ui.panel.config.zwave_js.dashboard.dump_dead_nodes_title':
          'Some of your devices are dead',
        'ui.panel.config.zwave_js.dashboard.dump_dead_nodes_text':
          "Some of your devices didn't respond and are assumed dead. These will not be fully exported.",
        'ui.panel.config.zwave_js.dashboard.dump_not_ready_title':
          'Not all devices are ready yet',
        'ui.panel.config.zwave_js.dashboard.dump_not_ready_text':
          'If you create an export while not all devices are ready, you could miss needed data. Give your network some time to query all devices. Do you want to continue with the dump?',
        'ui.panel.config.zwave_js.dashboard.dump_not_ready_confirm': 'Download',
        'ui.panel.config.zwave_js.device_info.zwave_info': 'Z-Wave Info',
        'ui.panel.config.zwave_js.device_info.node_status': 'Device Status',
        'ui.panel.config.zwave_js.device_info.node_ready': 'Device Ready',
        'ui.panel.config.zwave_js.device_info.device_config':
          'Configure Device',
        'ui.panel.config.zwave_js.device_info.reinterview_device':
          'Re-interview Device',
        'ui.panel.config.zwave_js.device_info.heal_node': 'Heal Device',
        'ui.panel.config.zwave_js.device_info.remove_failed':
          'Remove Failed Device',
        'ui.panel.config.zwave_js.device_info.highest_security':
          'Highest Security',
        'ui.panel.config.zwave_js.device_info.unknown': 'Unknown',
        'ui.panel.config.zwave_js.device_info.zwave_plus': 'Z-Wave Plus',
        'ui.panel.config.zwave_js.device_info.zwave_plus_version':
          'Version {version}',
        'ui.panel.config.zwave_js.node_config.header':
          'Z-Wave Device Configuration',
        'ui.panel.config.zwave_js.node_config.introduction':
          'Manage and adjust device specific configuration parameters for the selected device',
        'ui.panel.config.zwave_js.node_config.attribution':
          'Device configuration parameters and descriptions are provided by the {device_database}',
        'ui.panel.config.zwave_js.node_config.zwave_js_device_database':
          'Z-Wave JS Device Database',
        'ui.panel.config.zwave_js.node_config.battery_device_notice':
          'Battery devices must be awake to update their config. Please refer to your device manual for instructions on how to wake the device.',
        'ui.panel.config.zwave_js.node_config.parameter_is_read_only':
          'This parameter is read-only.',
        'ui.panel.config.zwave_js.node_config.error_device_not_found':
          'Device not found',
        'ui.panel.config.zwave_js.node_config.set_param_accepted':
          'The parameter has been updated.',
        'ui.panel.config.zwave_js.node_config.set_param_queued':
          'The parameter change has been queued, and will be updated when the device wakes up.',
        'ui.panel.config.zwave_js.node_config.set_param_error':
          'An error occurred.',
        'ui.panel.config.zwave_js.node_config.parameter': 'Parameter',
        'ui.panel.config.zwave_js.node_status.unknown': 'Unknown',
        'ui.panel.config.zwave_js.node_status.asleep': 'Asleep',
        'ui.panel.config.zwave_js.node_status.awake': 'Awake',
        'ui.panel.config.zwave_js.node_status.dead': 'Dead',
        'ui.panel.config.zwave_js.node_status.alive': 'Alive',
        'ui.panel.config.zwave_js.network_status.connected': 'Connected',
        'ui.panel.config.zwave_js.network_status.connecting': 'Connecting',
        'ui.panel.config.zwave_js.network_status.unknown': 'Unknown',
        'ui.panel.config.zwave_js.add_node.title': 'Add a Z-Wave Device',
        'ui.panel.config.zwave_js.add_node.searching_device':
          'Searching for device',
        'ui.panel.config.zwave_js.add_node.follow_device_instructions':
          'Follow the directions that came with your device to trigger pairing on the device.',
        'ui.panel.config.zwave_js.add_node.choose_inclusion_strategy':
          'How do you want to add your device',
        'ui.panel.config.zwave_js.add_node.qr_code': 'QR Code',
        'ui.panel.config.zwave_js.add_node.qr_code_paragraph':
          'If your device supports SmartStart you can scan the QR code for easy pairing.',
        'ui.panel.config.zwave_js.add_node.scan_qr_code': 'Scan QR code',
        'ui.panel.config.zwave_js.add_node.inclusion_failed':
          'The device could not be added.',
        'ui.panel.config.zwave_js.add_node.check_logs':
          'Please check the logs for more information.',
        'ui.panel.config.zwave_js.add_node.inclusion_finished':
          'The device has been added.',
        'ui.panel.config.zwave_js.add_node.provisioning_finished':
          'The device has been added. Once you power it on, it will become available.',
        'ui.panel.config.zwave_js.add_node.view_device': 'View Device',
        'ui.panel.config.zwave_js.add_node.interview_started':
          'The device is being interviewed. This may take some time.',
        'ui.panel.config.zwave_js.add_node.interview_failed':
          'The device interview failed. Additional information may be available in the logs.',
        'ui.panel.config.zwave_js.provisioned.dsk': 'DSK',
        'ui.panel.config.zwave_js.provisioned.security_classes':
          'Security classes',
        'ui.panel.config.zwave_js.provisioned.unprovison': 'Unprovison',
        'ui.panel.config.zwave_js.provisioned.included': 'Included',
        'ui.panel.config.zwave_js.provisioned.not_included': 'Not Included',
        'ui.panel.config.zwave_js.provisioned.confirm_unprovision_title':
          'Are you sure you want to unprovision the device?',
        'ui.panel.config.zwave_js.provisioned.confirm_unprovision_text':
          'If you unprovision the device it will not be added to Home Assistant when it is powered on. If it is already added to Home Assistant, removing the provisioned device will not remove it from Home Assistant.',
        'ui.panel.config.zwave_js.security_classes.None.title': 'None',
        'ui.panel.config.zwave_js.security_classes.S2_Unauthenticated.title':
          'S2 Unauthenticated',
        'ui.panel.config.zwave_js.security_classes.S2_Unauthenticated.description':
          'Like S2 Authenticated, but without verification that the correct device is included',
        'ui.panel.config.zwave_js.security_classes.S2_Authenticated.title':
          'S2 Authenticated',
        'ui.panel.config.zwave_js.security_classes.S2_Authenticated.description':
          'Example: Lighting, Sensors and Security Systems',
        'ui.panel.config.zwave_js.security_classes.S2_AccessControl.title':
          'S2 Access Control',
        'ui.panel.config.zwave_js.security_classes.S2_AccessControl.description':
          'Example: Door Locks and Garage Doors',
        'ui.panel.config.zwave_js.security_classes.S0_Legacy.title':
          'S0 Legacy',
        'ui.panel.config.zwave_js.security_classes.S0_Legacy.description':
          'Example: Legacy Door Locks without S2 support',
        'ui.panel.config.zwave_js.remove_node.title': 'Remove a Z-Wave device',
        'ui.panel.config.zwave_js.remove_node.introduction':
          'Remove a device from your Z-Wave network, and remove the associated device and entities from Home Assistant.',
        'ui.panel.config.zwave_js.remove_node.start_exclusion':
          'Start Exclusion',
        'ui.panel.config.zwave_js.remove_node.cancel_exclusion':
          'Cancel Exclusion',
        'ui.panel.config.zwave_js.remove_node.controller_in_exclusion_mode':
          'Your Z-Wave controller is now in exclusion mode.',
        'ui.panel.config.zwave_js.remove_node.follow_device_instructions':
          'Follow the directions that came with your device to trigger exclusion on the device.',
        'ui.panel.config.zwave_js.remove_node.exclusion_failed':
          'The device could not be removed. Please check the logs for more information.',
        'ui.panel.config.zwave_js.remove_node.exclusion_finished':
          'Device {id} has been removed from your Z-Wave network.',
        'ui.panel.config.zwave_js.remove_failed_node.title':
          'Remove a Failed Z-Wave Device',
        'ui.panel.config.zwave_js.remove_failed_node.introduction':
          'Remove a failed device from your Z-Wave network. Use this if you are unable to exclude a device normally because it is broken.',
        'ui.panel.config.zwave_js.remove_failed_node.remove_device':
          'Remove Device',
        'ui.panel.config.zwave_js.remove_failed_node.in_progress':
          'The device removal is in progress.',
        'ui.panel.config.zwave_js.remove_failed_node.removal_finished':
          'Device {id} has been removed from your Z-Wave network.',
        'ui.panel.config.zwave_js.remove_failed_node.removal_failed':
          'The device could not be removed from your Z-Wave network.',
        'ui.panel.config.zwave_js.reinterview_node.title':
          'Re-interview a Z-Wave Device',
        'ui.panel.config.zwave_js.reinterview_node.introduction':
          'Re-interview a device on your Z-Wave network. Use this feature if your device has missing or incorrect functionality.',
        'ui.panel.config.zwave_js.reinterview_node.battery_device_warning':
          "You will need to wake battery powered devices before starting the re-interview. Refer to your device's manual for instructions on how to wake the device.",
        'ui.panel.config.zwave_js.reinterview_node.run_in_background':
          'You can close this dialog and the interview will continue in the background.',
        'ui.panel.config.zwave_js.reinterview_node.start_reinterview':
          'Start Re-interview',
        'ui.panel.config.zwave_js.reinterview_node.in_progress':
          'The device is being interviewed. This may take some time.',
        'ui.panel.config.zwave_js.reinterview_node.interview_failed':
          'The device interview failed. Additional information may be available in the logs.',
        'ui.panel.config.zwave_js.reinterview_node.interview_complete':
          'Device interview complete.',
        'ui.panel.config.zwave_js.heal_network.title':
          'Heal your Z-Wave Network',
        'ui.panel.config.zwave_js.heal_network.introduction':
          'Start a network heal on your Z-Wave network. A network heal will cause all devices to re-calculate their routes back to the controller and is recommended if you have recently moved devices or your controller.',
        'ui.panel.config.zwave_js.heal_network.traffic_warning':
          'The healing process generates a large amount of traffic on the Z-Wave network. This may cause devices to respond slowly (or not at all) while the heal is in progress.',
        'ui.panel.config.zwave_js.heal_network.start_heal': 'Start Healing',
        'ui.panel.config.zwave_js.heal_network.in_progress':
          'Network healing is in progress. This will take some time.',
        'ui.panel.config.zwave_js.heal_network.run_in_background':
          'You can close this dialog and the network healing will continue in the background.',
        'ui.panel.config.zwave_js.heal_network.stop_heal': 'Stop Healing',
        'ui.panel.config.zwave_js.heal_network.healing_complete':
          'Network healing is complete.',
        'ui.panel.config.zwave_js.heal_network.healing_failed':
          'Healing failed. Additional information may be available in the logs.',
        'ui.panel.config.zwave_js.heal_network.healing_cancelled':
          'Network healing has been cancelled.',
        'ui.panel.config.zwave_js.heal_node.title': 'Heal a Z-Wave Device',
        'ui.panel.config.zwave_js.heal_node.introduction':
          'Tell {device} to update its routes back to the controller. This can help with communication issues if you have recently moved the device or your controller.',
        'ui.panel.config.zwave_js.heal_node.traffic_warning':
          'The healing process generates a large amount of traffic on the Z-Wave network. This may cause devices to respond slowly (or not at all) while the heal is in progress.',
        'ui.panel.config.zwave_js.heal_node.start_heal': 'Heal Device',
        'ui.panel.config.zwave_js.heal_node.healing_failed':
          '{device} could not be healed.',
        'ui.panel.config.zwave_js.heal_node.healing_failed_check_logs':
          'Additional information may be available in the logs.',
        'ui.panel.config.zwave_js.heal_node.healing_complete':
          '{device} has been healed.',
        'ui.panel.config.zwave_js.heal_node.in_progress':
          '{device} healing is in progress.',
        'ui.panel.config.zwave_js.heal_node.network_heal_in_progress':
          'A Z-Wave network heal is already in progress. Please wait for it to finish before healing an individual device.',
        'ui.panel.config.zwave_js.logs.title': 'Z-Wave JS Logs',
        'ui.panel.config.zwave_js.logs.log_level': 'Log Level',
        'ui.panel.config.zwave_js.logs.subscribed_to_logs':
          'Subscribed to Z-Wave JS Log Messages…',
        'ui.panel.config.zwave_js.logs.log_level_changed':
          'Log Level changed to: {level}',
        'ui.panel.config.zwave_js.logs.download_logs': 'Download logs',
      },
    },
    translationMetadata: {
      fragments: [
        'my',
        'config',
        'lovelace',
        'mailbox',
        'map',
        'profile',
        'shopping_list',
        'page-authorize',
        'page-demo',
        'developer-tools',
        'page-onboarding',
        'custom',
        'energy',
      ],
      translations: {
        af: {
          nativeName: 'Afrikaans',
          hash: '09508756079af27aabcc2256ae53349b',
        },
        ar: {
          nativeName: 'العربية',
          isRTL: true,
          hash: '4c57c68185664a25013293dc92b3b04a',
        },
        bg: {
          nativeName: 'Български',
          hash: '987b10971bd09a5bdcadfd8324d10ab2',
        },
        bn: {
          nativeName: 'বাংলা',
          hash: '9e5b59b11c6a42d390266b72353a2042',
        },
        bs: {
          nativeName: 'Bosanski',
          hash: 'b44aede7ccf0836d56ced40b8e88d045',
        },
        ca: {
          nativeName: 'Català',
          hash: '574f4a7f45d9d23a214507adce400915',
        },
        cs: {
          nativeName: 'Čeština',
          hash: '2313cb7dee049b4c2db7c59c07c3865f',
        },
        cy: {
          nativeName: 'Cymraeg',
          hash: 'c673a993de551335a300ab55e08033eb',
        },
        da: {
          nativeName: 'Dansk',
          hash: '0519c1006d6e3c4c2fbfa61d33902390',
        },
        de: {
          nativeName: 'Deutsch',
          hash: 'dba704f9d8a0be91230cf11a606c949a',
        },
        el: {
          nativeName: 'Ελληνικά',
          hash: '2871d74730baa9087e0734f3f0b9e2cd',
        },
        en: {
          nativeName: 'English',
          hash: '1c34b3207d0dbc32b029d245bd4f0175',
        },
        'en-GB': {
          nativeName: 'English (GB)',
          hash: '939c8d9a5e68eb41ea70283b71768d4b',
        },
        eo: {
          nativeName: 'Esperanto',
          hash: 'fa7d0b293754a2a51582093c85913a72',
        },
        es: {
          nativeName: 'Español',
          hash: '69cc84079d518e4ef338c1c12f5ee118',
        },
        'es-419': {
          nativeName: 'Español (Latin America)',
          hash: 'e7250c2ebc659f02eadb84afe3ceceda',
        },
        et: {
          nativeName: 'Eesti',
          hash: '79e9130fe5255295c7de079a223381e1',
        },
        eu: {
          nativeName: 'Euskara',
          hash: 'fff3e7bc3267f7f87692f4982a1ec71f',
        },
        fa: {
          nativeName: 'فارسی',
          isRTL: true,
          hash: '5b1963c0bf0f9ae55cdee9bcf8c51ef8',
        },
        fi: {
          nativeName: 'Suomi',
          hash: '8de5a84115c314a120652edb8fbba29d',
        },
        fy: {
          nativeName: 'Frysk',
          hash: '0191db05f85a97282103f7c2f51c4548',
        },
        fr: {
          nativeName: 'Français',
          hash: '6c2958b95050da9e51a7c18e5604eaf0',
        },
        gl: {
          nativeName: 'Galego',
          hash: '24be4de99aa46b89b0f68aefaa966e77',
        },
        gsw: {
          nativeName: 'Schwiizerdütsch',
          hash: '1b2afb92561dd20bd0563b4309cb36cd',
        },
        he: {
          nativeName: 'עברית',
          isRTL: true,
          hash: 'e9d3255d7dec746d783909e282dfbd51',
        },
        hi: {
          nativeName: 'हिन्दी',
          hash: '57b5912c967883a5728dfdd1aeca7df6',
        },
        hr: {
          nativeName: 'Hrvatski',
          hash: 'b5c2686e960ae306fe1f3f7ba4bb513a',
        },
        hu: {
          nativeName: 'Magyar',
          hash: '1197948c33b4363b5844a4efaf5c89b0',
        },
        hy: {
          nativeName: 'Հայերեն',
          hash: '49cd7732f247ff8e484232438787c0b3',
        },
        id: {
          nativeName: 'Indonesia',
          hash: 'd337744a42dcd400e45c8406d251ceb8',
        },
        it: {
          nativeName: 'Italiano',
          hash: '213a4a069a3ca34067ef6a819459552c',
        },
        is: {
          nativeName: 'Íslenska',
          hash: '5d8471b89b7f2490acb194aaad3817f2',
        },
        ja: {
          nativeName: '日本語',
          hash: '0635b030fe9162c7e338a56adcfe4399',
        },
        ka: {
          nativeName: 'Kartuli',
          hash: 'f556e4cbd0a41e3850fe230ff4c8a19c',
        },
        ko: {
          nativeName: '한국어',
          hash: '37aa27fa5476212d6a8b2ea744c3ffed',
        },
        lb: {
          nativeName: 'Lëtzebuergesch',
          hash: 'c540db898966f1d8823f234557873da5',
        },
        lt: {
          nativeName: 'Lietuvių',
          hash: '06e6133da98a6c4d655a146fd6cfe868',
        },
        lv: {
          nativeName: 'Latviešu',
          hash: 'd575f5805db6fbafe0d5e7a1cceda60f',
        },
        nl: {
          nativeName: 'Nederlands',
          hash: '2e6fc82be2bdb89735b32157fdbda244',
        },
        nb: {
          nativeName: 'Norsk Bokmål',
          hash: '480480ab102e11aaad631e0289fe7119',
        },
        nn: {
          nativeName: 'Norsk Nynorsk',
          hash: 'f318d9369e23688e1849afb18a943557',
        },
        pl: {
          nativeName: 'Polski',
          hash: 'afdec955d52908e52bb1c90dea53ca1c',
        },
        pt: {
          nativeName: 'Português',
          hash: 'e0742a83066dbdcdd964ff405790fa53',
        },
        'pt-BR': {
          nativeName: 'Português (BR)',
          hash: 'bb0cc558131706288dc52bc358db1a37',
        },
        ro: {
          nativeName: 'Română',
          hash: 'c25e72f88cb7192a8b3260a4ab4380f8',
        },
        ru: {
          nativeName: 'Русский',
          hash: '1b56c2f68052c0e2964994a789ae8ed2',
        },
        sk: {
          nativeName: 'Slovenčina',
          hash: '73d32cccfda8dfaa129c40409086b8da',
        },
        sl: {
          nativeName: 'Slovenščina',
          hash: 'd65b1c28cc3b958975632d3e5423a538',
        },
        sr: {
          nativeName: 'Српски',
          hash: '7af9f7458a47c97683dc44265f325ea0',
        },
        'sr-Latn': {
          nativeName: 'Srpski',
          hash: 'a1ce3bf0e167fed1166c1eb30eae917e',
        },
        sv: {
          nativeName: 'Svenska',
          hash: '0b9431d748f496c84eed2529940d1c0a',
        },
        ta: {
          nativeName: 'தமிழ்',
          hash: 'a6b050f705191c5335b94217bbc27c52',
        },
        te: {
          nativeName: 'తెలుగు',
          hash: '5490a5606eb9a7178feda46255e9a35c',
        },
        th: {
          nativeName: 'ภาษาไทย',
          hash: '4cc1d615bc6533b6699798c4b53890ad',
        },
        tr: {
          nativeName: 'Türkçe',
          hash: 'a1b5fe7340d0e789e9f8bb926e2ab45e',
        },
        uk: {
          nativeName: 'Українська',
          hash: 'cfd89b992d8a79e94716d9f932fe3647',
        },
        ur: {
          nativeName: 'اُردُو',
          hash: '78ede0da2c4061c1afe4ffccaa3b48f5',
        },
        vi: {
          nativeName: 'Tiếng Việt',
          hash: '007f278e81b7f47faef8778c7df741eb',
        },
        'zh-Hans': {
          nativeName: '简体中文',
          hash: 'f11205e9a59cd041b32ab1aa7b821a37',
        },
        'zh-Hant': {
          nativeName: '繁體中文',
          hash: 'b263341ed4cc1d8db28c1d412546ef63',
        },
        test: {
          nativeName: 'Test',
          hash: 'c55b59d6673ea6cbe5d4f36994c51fc1',
        },
      },
    },
    dockedSidebar: 'docked',
    vibrate: true,
    suspendWhenHidden: true,
    enableShortcuts: true,
    moreInfoEntityId: null,
    userData: {
      showAdvanced: true,
    },
  }
  shadowRoot: any
  actionRows: any = []
  settings = false
  settingsCustomCard = false
  settingsPosition = 'bottom'
  brightnessTransitionEnabled = false
  brightnessTransitionTime = '0.5'

  static get properties() {
    return {
      hass: {},
      config: {},
      active: {},
    }
  }

  constructor() {
    super()
  }

  render() {
    var entity = this.config.entity
    var stateObj = this.hass.states[entity]
    var actionsInARow = this.config.actionsInARow
      ? this.config.actionsInARow
      : 4
    var icon = this.config.icon
      ? this.config.icon
      : stateObj.attributes.icon
      ? stateObj.attributes.icon
      : 'mdi:lightbulb'
    var borderRadius = this.config.borderRadius
      ? this.config.borderRadius
      : '12px'
    var onStates = this.config.onStates ? this.config.onStates : ['on']
    var offStates = this.config.offStates ? this.config.offStates : ['off']
    //Scenes
    var actionSize =
      'actionSize' in this.config ? this.config.actionSize : '50px'
    var actions = this.config.actions
    if (actions && actions.length > 0) {
      var numberOfRows = Math.ceil(actions.length / actionsInARow)
      for (var i = 0; i < numberOfRows; i++) {
        this.actionRows[i] = []
        for (var j = 0; j < actionsInARow; j++) {
          if (actions[i * actionsInARow + j]) {
            this.actionRows[i][j] = actions[i * actionsInARow + j]
          }
        }
      }
    }

    var switchValue = 0

    if (onStates.includes(stateObj.state)) {
      switchValue = 1
    }

    var fullscreen = 'fullscreen' in this.config ? this.config.fullscreen : true
    var brightnessWidth = this.config.brightnessWidth
      ? this.config.brightnessWidth
      : '150px'
    var brightnessHeight = this.config.brightnessHeight
      ? this.config.brightnessHeight
      : '400px'
    var switchWidth = this.config.switchWidth
      ? this.config.switchWidth
      : '150px'
    var switchHeight = this.config.switchHeight
      ? this.config.switchHeight
      : '380px'

    var color = this._getColorForLightEntity(
      stateObj,
      this.config.useTemperature,
      this.config.useBrightness
    )
    var sliderColor =
      'sliderColor' in this.config ? this.config.sliderColor : '#FFF'
    var sliderColoredByLight =
      'sliderColoredByLight' in this.config
        ? this.config.sliderColoredByLight
        : false
    var sliderThumbColor =
      'sliderThumbColor' in this.config ? this.config.sliderThumbColor : '#ddd'
    var sliderTrackColor =
      'sliderTrackColor' in this.config ? this.config.sliderTrackColor : '#ddd'
    var switchColor =
      'switchColor' in this.config ? this.config.switchColor : '#FFF'
    var switchTrackColor =
      'switchTrackColor' in this.config ? this.config.switchTrackColor : '#ddd'
    var actionRowCount = 0
    var displayType = 'slider'
    this.brightnessTransitionEnabled =
      'brightnessTransitionEnabled' in this.config
        ? this.config.brightnessTransitionEnabled
        : false
    this.brightnessTransitionTime =
      'brightnessTransitionTime' in this.config
        ? this.config.brightnessTransitionTime
        : '0.5'

    var hideIcon = 'hideIcon' in this.config ? this.config.hideIcon : false
    var hideState = 'hideState' in this.config ? this.config.hideState : false

    this.settings = 'settings' in this.config ? true : false
    this.settingsCustomCard = 'settingsCard' in this.config ? true : false
    this.settingsPosition =
      'settingsPosition' in this.config
        ? this.config.settingsPosition
        : 'bottom'
    if (this.settingsCustomCard && this.config.settingsCard.cardOptions) {
      if (
        this.config.settingsCard.cardOptions.entity &&
        this.config.settingsCard.cardOptions.entity == 'this'
      ) {
        this.config.settingsCard.cardOptions.entity = entity
      } else if (
        this.config.settingsCard.cardOptions.entity_id &&
        this.config.settingsCard.cardOptions.entity_id == 'this'
      ) {
        this.config.settingsCard.cardOptions.entity_id = entity
      } else if (this.config.settingsCard.cardOptions.entities) {
        for (let key in this.config.settingsCard.cardOptions.entities) {
          if (this.config.settingsCard.cardOptions.entities[key] == 'this') {
            this.config.settingsCard.cardOptions.entities[key] = entity
          }
        }
      }
    }
    var brightness = stateObj.attributes.brightness
      ? Math.round(stateObj.attributes.brightness / 2.55)
      : 0
    return html`
      <div class="${fullscreen === true ? 'popup-wrapper' : ''}" id="tesint">
        <div id="popup" class="popup-inner" @click="${(e) => this._close(e)}">
          ${!hideIcon
            ? html``
            : html`
                <div class="icon${fullscreen === true ? ' fullscreen' : ''}">
                  <ha-icon
                    style="${onStates.includes(stateObj.state)
                      ? 'color:' + color + ';'
                      : ''}"
                    icon="${icon}"
                  />
                </div>
              `}
          ${(stateObj.attributes.supported_color_modes?.includes(
            'brightness'
          ) &&
            displayType == 'auto') ||
          displayType == 'slider'
            ? html`
                ${hideState
                  ? html``
                  : html`
                      <h4 id="brightnessValue">
                        ${offStates.includes(stateObj.state)
                          ? brightness + '%' //this.hass.localize(`component.light.state._.off`)
                          : brightness + '%'}
                      </h4>
                    `}
                <div
                  class="range-holder"
                  style="--slider-height: ${brightnessHeight};--slider-width: ${brightnessWidth};"
                >
                  <input
                    type="range"
                    style="--slider-width: ${brightnessWidth};--slider-height: ${brightnessHeight}; --slider-border-radius: ${borderRadius};${sliderColoredByLight
                      ? '--slider-color:' + color + ';'
                      : '--slider-color:' +
                        sliderColor +
                        ';'}--slider-thumb-color:${sliderThumbColor};--slider-track-color:${sliderTrackColor};"
                    .value="${offStates.includes(stateObj.state)
                      ? 0
                      : Math.round(stateObj.attributes.brightness / 2.55)}"
                    @input=${(e) => this._previewBrightness(e.target.value)}
                    @change=${(e) =>
                      this._setBrightness(stateObj, e.target.value)}
                  />
                </div>
              `
            : html``}
          ${actions && actions.length > 0
            ? html`
                <div class="action-holder">
                  ${this.actionRows.map((actionRow) => {
                    actionRowCount++
                    var actionCount = 0
                    return html`
                      <div class="action-row">
                        ${actionRow.map((action) => {
                          actionCount++
                          return html`
                            <div
                              class="action"
                              style="--size:${actionSize};"
                              @click="${(e) => this._activateAction(e)}"
                              data-service="${actionRowCount}#${actionCount}"
                            >
                              <span
                                class="color"
                                style="background-color: ${action.color};border-color: ${action.color};--size:${actionSize};${action.image
                                  ? "background-size: contain;background-image:url('" +
                                    action.image +
                                    "')"
                                  : ''}"
                                >${action.icon
                                  ? html` <ha-icon icon="${action.icon}" /> `
                                  : html``}</span
                              >
                              ${action.name
                                ? html`
                                    <span class="name">${action.name}</span>
                                  `
                                : html``}
                            </div>
                          `
                        })}
                      </div>
                    `
                  })}
                </div>
              `
            : html``}
          ${this.settings
            ? html`
                <button
                  class="settings-btn ${this.settingsPosition}${fullscreen ===
                  true
                    ? ' fullscreen'
                    : ''}"
                  @click="${() => this._openSettings()}"
                >
                  ${this.config.settings.openButton
                    ? this.config.settings.openButton
                    : 'Settings'}
                </button>
              `
            : html``}
        </div>

        ${this.settings
          ? html`
              <div
                id="settings"
                class="settings-inner"
                @click="${(e) => this._close(e)}"
              >
                ${this.settingsCustomCard
                  ? html`
                      <div
                        class="custom-card"
                        data-card="${this.config.settingsCard.type}"
                        data-options="${JSON.stringify(
                          this.config.settingsCard.cardOptions
                        )}"
                        data-style="${this.config.settingsCard.cardStyle
                          ? this.config.settingsCard.cardStyle
                          : ''}"
                      ></div>
                    `
                  : html`
                      <p style="color:#F00;">
                        Set settingsCustomCard to render a lovelace card here!
                      </p>
                    `}
                <button
                  class="settings-btn ${this.settingsPosition}${fullscreen ===
                  true
                    ? ' fullscreen'
                    : ''}"
                  @click="${() => this._closeSettings()}"
                >
                  ${this.config.settings.closeButton
                    ? this.config.settings.closeButton
                    : 'Close'}
                </button>
              </div>
            `
          : html``}
      </div>
    `
  }

  updated() {}

  firstUpdated() {
    if (this.settings && !this.settingsCustomCard) {
      const mic = this.shadowRoot.querySelector('more-info-controls').shadowRoot
      mic.removeChild(mic.querySelector('app-toolbar'))
    } else if (this.settings && this.settingsCustomCard) {
      this.shadowRoot.querySelectorAll('.custom-card').forEach((customCard) => {
        var card = {
          type: customCard.dataset.card,
        }
        card = Object.assign({}, card, JSON.parse(customCard.dataset.options))
        const cardElement = createCard(card)
        customCard.appendChild(cardElement)
        provideHass(cardElement)
        let style = ''
        if (customCard.dataset.style) {
          style = customCard.dataset.style
        }
        if (style != '') {
          let itterations = 0
          let interval = setInterval(function () {
            if (cardElement && cardElement.shadowRoot) {
              window.clearInterval(interval)
              var styleElement = document.createElement('style')
              styleElement.innerHTML = style
              cardElement.shadowRoot.appendChild(styleElement)
            } else if (++itterations === 10) {
              window.clearInterval(interval)
            }
          }, 100)
        }
      })
    }
  }

  _close(event) {
    if (
      event &&
      (event.target.className.includes('popup-inner') ||
        event.target.className.includes('settings-inner'))
    ) {
      closePopUp()
    }
  }

  _openSettings() {
    this.shadowRoot.getElementById('popup').classList.add('off')
    this.shadowRoot.getElementById('settings').classList.add('on')
  }
  _closeSettings() {
    this.shadowRoot.getElementById('settings').classList.remove('on')
    this.shadowRoot.getElementById('popup').classList.remove('off')
  }

  _createRange(amount) {
    const items: any = []
    for (let i = 0; i < amount; i++) {
      items.push(i)
    }
    return items
  }

  _previewBrightness(value) {
    const el = this.shadowRoot.getElementById('brightnessValue')
    if (el) {
      el.innerText = value == 0 ? 'Off' : value + '%'
    }
  }

  _setBrightness(state, value) {
    if (this.brightnessTransitionEnabled) {
      this.hass.callService('homeassistant', 'turn_on', {
        entity_id: state.entity_id,
        brightness: value * 2.55,
        transition: this.brightnessTransitionTime,
      })
    } else {
      this.hass.callService('homeassistant', 'turn_on', {
        entity_id: state.entity_id,
        brightness: value * 2.55,
      })
    }
  }

  _switch(state) {
    this.hass.callService('homeassistant', 'toggle', {
      entity_id: state.entity_id,
    })
  }

  _activateAction(e) {
    if (e.target.dataset && e.target.dataset.service) {
      const [row, item] = e.target.dataset.service.split('#', 2)
      const action = this.actionRows[row - 1][item - 1]
      if (!('action' in action)) {
        action.action = 'call-service'
      }

      switch (action.action) {
        case 'call-service':
          const [domain, service] = action.service.split('.', 2)
          this.hass.callService(domain, service, action.service_data)
          break
        case 'fire-dom-event':
          fireEvent('ll-custom', action)
          break
      }
    }
  }

  _getColorForLightEntity(stateObj, useTemperature, useBrightness) {
    var color = this.config.default_color
      ? this.config.default_color
      : undefined
    if (stateObj) {
      if (stateObj.attributes.rgb_color) {
        color = `rgb(${stateObj.attributes.rgb_color.join(',')})`
        if (stateObj.attributes.brightness) {
          color = this._applyBrightnessToColor(
            color,
            (stateObj.attributes.brightness + 245) / 5
          )
        }
      } else if (
        useTemperature &&
        stateObj.attributes.color_temp &&
        stateObj.attributes.min_mireds &&
        stateObj.attributes.max_mireds
      ) {
        color = this._getLightColorBasedOnTemperature(
          stateObj.attributes.color_temp,
          stateObj.attributes.min_mireds,
          stateObj.attributes.max_mireds
        )
        if (stateObj.attributes.brightness) {
          color = this._applyBrightnessToColor(
            color,
            (stateObj.attributes.brightness + 245) / 5
          )
        }
      } else if (useBrightness && stateObj.attributes.brightness) {
        color = this._applyBrightnessToColor(
          this._getDefaultColorForState(),
          (stateObj.attributes.brightness + 245) / 5
        )
      } else {
        color = this._getDefaultColorForState()
      }
    }
    return color
  }

  _applyBrightnessToColor(color, brightness) {
    const colorObj = new TinyColor(this._getColorFromVariable(color))
    if (colorObj.isValid) {
      const validColor = colorObj.mix('black', 100 - brightness).toString()
      if (validColor) return validColor
    }
    return color
  }

  _getLightColorBasedOnTemperature(current, min, max) {
    const high = new TinyColor('rgb(255, 160, 0)') // orange-ish
    const low = new TinyColor('rgb(166, 209, 255)') // blue-ish
    const middle = new TinyColor('white')
    const mixAmount = ((current - min) / (max - min)) * 100
    if (mixAmount < 50) {
      return tinycolor(low)
        .mix(middle, mixAmount * 2)
        .toRgbString()
    } else {
      return tinycolor(middle)
        .mix(high, (mixAmount - 50) * 2)
        .toRgbString()
    }
  }

  _getDefaultColorForState() {
    return this.config.color_on ? this.config.color_on : '#f7d959'
  }

  _getColorFromVariable(color: string): string {
    if (typeof color !== 'undefined' && color.substring(0, 3) === 'var') {
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(color.substring(4).slice(0, -1))
        .trim()
    }
    return color
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity')
    }
    this.config = config
  }

  getCardSize() {
    return this.config.entities.length + 1
  }

  static get styles() {
    return css`
      :host {
        background-color: #000 !important;
      }
      .popup-wrapper {
        margin-top: 64px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .popup-inner {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .popup-inner.off {
        display: none;
      }
      #settings {
        display: none;
      }
      .settings-inner {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      #settings.on {
        display: flex;
      }
      .settings-btn {
        position: absolute;
        right: 30px;
        background-color: #7f8082;
        color: #fff;
        border: 0;
        padding: 5px 20px;
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;
      }
      .settings-btn.bottom {
        bottom: 15px;
      }
      .settings-btn.bottom.fullscreen {
        margin: 0;
      }
      .settings-btn.top {
        top: 25px;
      }
      .fullscreen {
        margin-top: -64px;
      }
      .icon {
        text-align: center;
        display: block;
        height: 40px;
        width: 40px;
        color: rgba(255, 255, 255, 0.3);
        font-size: 30px;
        --mdc-icon-size: 30px;
        padding-top: 5px;
      }
      .icon ha-icon {
        width: 30px;
        height: 30px;
      }
      .icon.on ha-icon {
        color: #f7d959;
      }
      h4 {
        color: #fff;
        display: block;
        font-weight: 300;
        margin-bottom: 30px;
        text-align: center;
        font-size: 20px;
        margin-top: 0;
        text-transform: capitalize;
      }

      .range-holder {
        height: var(--slider-height);
        width: var(--slider-width);
        position: relative;
        display: block;
      }
      .range-holder input[type='range'] {
        outline: 0;
        border: 0;
        border-radius: var(--slider-border-radius, 12px);
        width: var(--slider-height);
        margin: 0;
        transition: box-shadow 0.2s ease-in-out;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        overflow: hidden;
        height: var(--slider-width);
        -webkit-appearance: none;
        background-color: var(--slider-track-color);
        position: absolute;
        top: calc(50% - (var(--slider-width) / 2));
        right: calc(50% - (var(--slider-height) / 2));
      }
      .range-holder input[type='range']::-webkit-slider-runnable-track {
        height: var(--slider-width);
        -webkit-appearance: none;
        background-color: var(--slider-track-color);
        margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      .range-holder input[type='range']::-webkit-slider-thumb {
        width: 25px;
        border-right: 10px solid var(--slider-color);
        border-left: 10px solid var(--slider-color);
        border-top: 20px solid var(--slider-color);
        border-bottom: 20px solid var(--slider-color);
        -webkit-appearance: none;
        height: 80px;
        cursor: ew-resize;
        background: var(--slider-color);
        box-shadow: -350px 0 0 350px var(--slider-color),
          inset 0 0 0 80px var(--slider-thumb-color);
        border-radius: 0;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        top: calc((var(--slider-width) - 80px) / 2);
      }
      .range-holder input[type='range']::-moz-thumb-track {
        height: var(--slider-width);
        background-color: var(--slider-track-color);
        margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      .range-holder input[type='range']::-moz-range-thumb {
        width: 5px;
        border-right: 12px solid var(--slider-color);
        border-left: 12px solid var(--slider-color);
        border-top: 20px solid var(--slider-color);
        border-bottom: 20px solid var(--slider-color);
        height: calc(var(--slider-width) * 0.4);
        cursor: ew-resize;
        background: var(--slider-color);
        box-shadow: -350px 0 0 350px var(--slider-color),
          inset 0 0 0 80px var(--slider-thumb-color);
        border-radius: 0;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        top: calc((var(--slider-width) - 80px) / 2);
      }
      .switch-holder {
        height: var(--switch-height);
        width: var(--switch-width);
        position: relative;
        display: block;
      }
      .switch-holder input[type='range'] {
        outline: 0;
        border: 0;
        border-radius: var(--slider-border-radius, 12px);
        width: calc(var(--switch-height) - 20px);
        margin: 0;
        transition: box-shadow 0.2s ease-in-out;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        overflow: hidden;
        height: calc(var(--switch-width) - 20px);
        -webkit-appearance: none;
        background-color: var(--switch-track-color);
        padding: 10px;
        position: absolute;
        top: calc(50% - (var(--switch-width) / 2));
        right: calc(50% - (var(--switch-height) / 2));
      }
      .switch-holder input[type='range']::-webkit-slider-runnable-track {
        height: calc(var(--switch-width) - 20px);
        -webkit-appearance: none;
        color: var(--switch-track-color);
        margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      .switch-holder input[type='range']::-webkit-slider-thumb {
        width: calc(var(--switch-height) / 2);
        -webkit-appearance: none;
        height: calc(var(--switch-width) - 20px);
        cursor: ew-resize;
        background: var(--switch-color);
        transition: box-shadow 0.2s ease-in-out;
        border: none;
        box-shadow: -1px 1px 20px 0px rgba(0, 0, 0, 0.75);
        position: relative;
        top: 0;
        border-radius: var(--slider-border-radius, 12px);
      }

      .action-holder {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
      }
      .action-row {
        display: block;
        padding-bottom: 10px;
      }
      .action-row:last-child {
        padding: 0;
      }
      .action-holder .action {
        display: inline-block;
        margin-right: 4px;
        margin-left: 4px;
        cursor: pointer;
      }
      .action-holder .action:nth-child(4n) {
        margin-right: 0;
      }
      .action-holder .action .color {
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: block;
        border: 1px solid #fff;
        line-height: var(--size);
        text-align: center;
        pointer-events: none;
      }
      .action-holder .action .color ha-icon {
        pointer-events: none;
      }
      .action-holder .action .name {
        width: var(--size);
        display: block;
        color: #fff;
        font-size: 9px;
        margin-top: 3px;
        text-align: center;
        pointer-events: none;
      }
    `
  }
}

customElements.define('cct-popup-card', LightPopupCard)
console.info(
  '%c   CCT-POPUP  \n%c Version 0.0.1 ',
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
)
