import { WebView } from 'react-native-webview';


export default function MyWebComponent() {
  return (
    <WebView
      source={{ uri: 'https://www.app.petmets.in/' }}
      style={{ flex: 1 }}
      onLoad={() => console.log('WebView loaded!')}
      onError={(error) => console.error('WebView error:', error)}
      javaScriptEnabled={true}
    />
  );
}
