import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';

export default function Index() {
  return (
    // SafeAreaView is used to render content within the safe area boundaries of a device.
    // It helps to avoid content from being obscured by notches, status bars, home indicators, etc.
    <SafeAreaView style={{ flex: 1 }}>
      {/* WebView component is used to display web content within the native app. */}
      <WebView
        // The source prop specifies the URL to load in the WebView.
        source={{ uri: 'otical.in' }}
        // The style prop is used to define the appearance of the WebView.
        // flex: 1 ensures that the WebView takes up the entire available space.
        style={{ flex: 1 }}
      />
      {/* Closing tag for WebView */}
    </SafeAreaView>
    // Closing tag for SafeAreaView
  );
}
