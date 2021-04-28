// eslint-disable-next-line no-unused-vars
import React, {useState, useMemo} from 'react';
import {QuickFind} from '../QuickFind';
import {ThemeWrap} from '../Theme';
import {
    recentPagesData,
    recentSearchesData,
    searchResultsData,
    notFindText,
} from './data';
// eslint-disable-next-line @reskript/import-order
import {useMediaQuery, createMuiTheme, ThemeProvider} from '@material-ui/core';
// import getAppTheme from './app-theme';

//   isLoding?: boolean;                              是否为加载状态
//   isNotFind?: boolean;                             是否显示无搜索结果状态
//   notFindText?: any;                               无搜索结果状态显示内容
//   placeholder?: string;                            输入框默认显示内容
//   recentPagesData?: any;                           最近使用文章
//   recentSearchesData?: any;                        最近搜索关键词
//   searchResultsData?: any;                         搜索结果数据
//   onSearch?: ...                                   搜索内容回调
//   onSortRules: (...args: any) => any;              搜索结果显示排序规则回调
//   onClickItem: (...args: any) => any;              搜索结果点击事件

const {log} = console;
function DemoQuickFind() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const appTheme = useMemo(() => {
        const themeType = prefersDarkMode ? 'dark' : 'light';
        // const appThemeConfig = getAppTheme(themeType);
        return createMuiTheme({
            // app: appThemeConfig,
            palette: {
                type: themeType,
                isDark: prefersDarkMode === 'dark',
            },
        });
    }, [prefersDarkMode]);

    const [value, setValue] = useState(''); // 更换显示页面 -->  默认首页
    // const [value, setValue] = useState('test'); //更换显示页面--> 搜索结果页

    return (
        <ThemeProvider theme={appTheme}>
            <ThemeWrap>
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(15, 15, 15, 0.6)',
                    }}
                >
                    {/* 输入 test 进行测试 */}
                    <QuickFind
                        isLoding={value === 'loading'}
                        isNotFind={value === 'no'}
                        notFindText={notFindText}
                        placeholder="Search 工作区.."
                        // eslint-disable-next-line react/jsx-no-bind
                        onSearch={e => {
                            setValue(e.target.value);
                        }}
                        // recentPagesData={null}
                        // recentSearchesData={null}
                        recentPagesData={recentPagesData}
                        recentSearchesData={recentSearchesData}
                        searchResultsData={value === 'test' ? searchResultsData : null}
                        // eslint-disable-next-line react/jsx-no-bind
                        onSortRules={res => {
                            log(res);
                        }}
                        // eslint-disable-next-line react/jsx-no-bind
                        onClickItem={res => {
                            log(res);
                        }}
                    />
                </div>
            </ThemeWrap>
        </ThemeProvider>
    );
}

export default DemoQuickFind;
