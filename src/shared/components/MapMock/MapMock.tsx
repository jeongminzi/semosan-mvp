import { MapPin } from 'phosphor-react-native';
import React from 'react';
import {
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Svg, { Defs, Path, Pattern, Rect, Circle } from 'react-native-svg';

import { BorderRadius, Colors, Primitive } from '../../constants';

export interface MapMockPin {
  /** 0~1 (x 비율) */
  x: number;
  /** 0~1 (y 비율) */
  y: number;
  /** 현재 위치 핀 여부 */
  user?: boolean;
  /** 강조 핀 (주요 목적지) */
  highlight?: boolean;
}

export interface MapMockRoute {
  /** SVG path d 값 (viewBox 0 0 100 100 기준 %) */
  path: string;
  dashed?: boolean;
}

export interface MapMockProps {
  pins?: MapMockPin[];
  route?: MapMockRoute;
  radius?: number;
  /** 모서리 없이 꽉 채움 */
  fullBleed?: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * MapMock — 지도 영역 플레이스홀더
 * 실제 react-native-maps 대체. Storybook 웹 뷰에서도 안정적으로 렌더링.
 */
export function MapMock({
  pins = [],
  route,
  radius,
  fullBleed = false,
  style,
}: MapMockProps) {
  return (
    <View
      style={[
        styles.container,
        { borderRadius: fullBleed ? 0 : radius ?? BorderRadius.md },
        style,
      ]}
    >
      <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <Defs>
          <Pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <Path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke={Primitive.gray[200]}
              strokeWidth="0.5"
            />
          </Pattern>
        </Defs>
        <Rect width="100" height="100" fill="url(#grid)" />
        {route && (
          <Path
            d={route.path}
            stroke={Primitive.gray[700]}
            strokeWidth="1.2"
            fill="none"
            strokeDasharray={route.dashed ? '2 1.5' : undefined}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </Svg>

      {pins.map((pin, i) => (
        <View
          key={i}
          style={[
            styles.pin,
            { left: `${pin.x * 100}%`, top: `${pin.y * 100}%` },
            pin.user && styles.pinUser,
            pin.highlight && styles.pinHighlight,
          ]}
        >
          {!pin.user && (
            <MapPin
              size={pin.highlight ? 20 : 16}
              weight="fill"
              color={pin.highlight ? Colors.interactive.primary : Primitive.gray[600]}
            />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1.6,
    backgroundColor: Primitive.gray[50],
    overflow: 'hidden',
  },
  pin: {
    position: 'absolute',
    transform: [{ translateX: -8 }, { translateY: -16 }],
  },
  pinUser: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: Colors.interactive.primary,
    backgroundColor: Colors.background.primary,
    transform: [{ translateX: -7 }, { translateY: -7 }],
  },
  pinHighlight: {
    transform: [{ translateX: -10 }, { translateY: -20 }],
  },
});

// Avoid unused warning
void Circle;
