import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Card, IconButton} from '../Components';
import {Images} from '../Images';
import {HomeActions} from '../Redux/Home';
import {HomeSelectors} from '../Selectors/Home';

const HomeScreen = ({navigation}: any) => {
  const fetching = useSelector(HomeSelectors.isFetching);
  const data = useSelector(HomeSelectors.getData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.ui.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        testID="scroll-home"
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Seja Bem-vindo</Text>
          <IconButton
            testID="button-profile"
            icon={Images.user}
            onPress={handleGoProfile}
          />
        </View>
        {!fetching &&
          data.map((item, index) => (
            <Card key={`card-${index}`} title={item} index={index} />
          ))}
        {fetching && (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}
        {!fetching && data.length === 0 && (
          <View style={styles.centerContainer}>
            <Text>Nenhum dado encontrado</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerContainer: {
    width: '90%',
    paddingTop: 30,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  centerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
