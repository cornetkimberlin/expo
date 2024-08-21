import type { WebViewRef } from 'expo/dom';
import { useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import Actions from '../components/02-actions';
import LocalAsset from '../components/03-local-asset';
import Tailwind from '../components/04-tailwind';
import PublicAsset from '../components/05-public-asset';
import ForwardRef from '../components/06-forward-ref';

export default function Page() {
  const [index, setIndex] = useState(0);
  const forwardedRef = useRef<WebViewRef>(null);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, padding: 56 }}>
      <TestCase name="Actions">
        <Actions
          index={index}
          autoSize
          setIndexAsync={async (index) => setIndex(index)}
          showAlert={(time) => {
            alert('Hello, world! ' + time);
          }}
          throwError={() => {
            throw new Error('hey');
          }}
          getNativeSettings={async () => {
            return 'native setting';
          }}
        />
        <Button
          title={`Increment on native: ${index}`}
          onPress={() => setIndex((index) => index + 1)}
        />
      </TestCase>

      <TestCase name="Local Asset">
        <LocalAsset autoSize />
      </TestCase>

      <TestCase name="Public Asset">
        <PublicAsset autoSize />
      </TestCase>

      <TestCase name="Tailwind">
        <Tailwind autoSize />
      </TestCase>

      <TestCase name="forwardRef">
        <ForwardRef autoSize ref={forwardedRef} />
        <Button
          title="Toggle width by injectJavaScript"
          onPress={() => {
            forwardedRef.current?.injectJavaScript(`
            (function() {
              const element = document.getElementById('test');
              element.style.width = element.offsetWidth > 50 ? '50px' : '200px';
            })();
            true;
          `);
          }}
        />
      </TestCase>
    </ScrollView>
  );
}

function TestCase({ name, children }) {
  return (
    <View style={styles.testcaseContainer}>
      <Text style={styles.testcaseLabel}>{name}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  testcaseContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testcaseLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4A90E2',
  },
});
