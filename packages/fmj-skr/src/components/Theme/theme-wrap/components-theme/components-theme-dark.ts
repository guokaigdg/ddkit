import componentsThemeDefault from './components-theme-defaule';

/** 黑暗模式 */

const componentsThemeDark = {
    ...componentsThemeDefault,

    // 更改全局默认设置
    MuiMenu: {
        paper: {
            background: 'rgb(48, 50, 55)',
        },
    },

    // iffe 主项目使用配色
    settingContent: {
        backgroundColor: 'rgb(54, 57, 63)',
    },
    SettingDialogLayout: {
        SidebarArea: {
            backgroundColor: 'rgb(55, 60, 63)',
        },
        ContentArea: {
            backgroundColor: 'rgb(47, 52, 55)',
        },
    },
    Login: {
        root: {
            backgroundColor: 'rgb(54, 57, 63)',
        },
    },
    Regieter: {
        root: {
            backgroundColor: 'rgb(54, 57, 63)',
        },
    },

    // 自定义样式
    common: {
        Button: {
            TextButton: {
                color: 'rgb(235,235,235)',
                hover: 'rgb(255, 255, 255)',
            },
        },
        Checkbox: {
            boxShadow: 'rgb(114,118,125)',
        },
        ConfirmDialog: {
            topArea: {
                backgroundColor: 'rgb(54,57,63)',
                title: {color: 'rgb(255,255,255)'},
                des: {color: 'rgb(216,217,218)'},
            },
            bottomArea: {
                backgroundColor: 'rgb(47,47,54)',
            },
        },
        Display: {
            root: {
                hover: 'rgb(71,76,80)',
                active: 'rgb(63,68,71)',
            },
            icon: {
                color: 'rgb(175, 177, 178)',
            },
            title: {
                clor: 'rgb(175, 177, 178)',
            },
        },
        Divider: {
            background: 'rgb(59, 61, 66)',
        },
        Input: {
            borderColor: 'rgb(32, 34, 37)',
            color: 'rgb(221, 221, 222)',
            backgroundColor: 'rgb(48, 50, 55)',
        },
        Loding: {
            color: 'rgb(235,235,235)',
        },
        Radio: {
            icon: {
                color: 'rgb(114,118,125)',
            },
        },
        Select: {
            FormControl: {
                backgroundColor: 'rgb(48, 50, 55)',
            },
            InputLabel: {
                color: '#72767D',
            },
            InputBase: {
                color: '#DCDDDE',
                borderColor: 'rgb(32,34,37)',
                backgroundColor: 'rgb(48, 50, 55)',
            },
            MenuItem: {
                color: 'rgb(246,246,247)',
            },
        },
        Title: {
            BigTitle: {
                color: 'rgb(255, 255, 255)',
            },
            DefaultTitle: {
                color: 'rgb(255, 255, 255)',
            },
            DesTitle: {
                color: 'rgb(142, 146, 151)',
            },
            LargeTitle: {
                color: 'rgb(255, 255, 255)',
            },
            MaxTitle: {
                color: 'rgb(255, 255, 255)',
            },
            SmallTitle: {
                color: 'rgb(185, 187, 190)',
            },
        },
    },

    emoji: {
        EmojiDialog: {
            root: {
                backgroundColor: 'rgb(63,68,71)',
            },
            divider: {
                color: 'rgb(74, 80, 82)',
            },
        },
        EmojiDialogContent: {
            searchArea: {
                borderColor: 'rgb(37,39,41)',
                backgroundColor: 'rgb(48,51,54)',
            },
            title: {
                color: 'rgb(178,180,181)',
            },
            emojiIcon: {
                hover: 'rgb(71,76,80)',
                active: 'rgb(63,68,71)',
            },
            searchIcon: {
                color: 'rgba(202,204,206,1)',
            },
            cancelIcon: {
                color: 'rgb(110,113,114)',
            },
            input: {
                color: 'rgb(235, 235, 235)',
                backgroundColor: 'rgb(48,51,54)',
                placeholder: 'rgb(178,180,181)',
            },
        },
        EmojiDialogTop: {
            emojiFont: {
                color: 'rgb(234,235,235)',
            },
            topButton: {
                color: 'rgb(178,180,181)',
                hover: 'rgb(71,76,80)',
                active: 'rgb(63,68,71)',
            },
        },
    },

    setting: {
        AccountEdit: {
            root: {
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(41, 43, 47)',
            },
            AccountEditInput: {
                input: {
                    borderColor: 'rgb(32, 34, 37)',
                    color: 'rgb(221, 221, 222)',
                    backgroundColor: 'rgb(48, 50, 55)',
                },
            },
            TopAccountEdit: {
                title: {
                    color: 'rgb(121, 125, 130)',
                },
            },
        },
        BorderTitleView: {
            root: {
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(41, 43, 47)',
            },
            desc: {
                color: 'rgb(121,125,130)',
            },
            text: {
                color: 'rgb(220, 221, 222)',
            },
        },
        DirectoryButton: {
            DirectoryDefaultButton: {
                color: 'rgb(185, 187, 190)',
                hover: {
                    color: 'rgb(255, 255, 255)',
                    backgroundColor: 'rgb(52, 55, 60)',
                },
                active: {
                    backgroundColor: 'rgb(55, 57, 63)',
                },
            },
            DirectoryChoosedButton: {
                color: 'rgb(255, 255, 255)',
                backgroundColor: 'rgb(57, 60, 67)',
            },
            DirectoryBlueButton: {
                hover: 'rgb(53,58,70)',
            },
            DirectoryRedButton: {
                hover: 'rgb(66,50,55)',
            },
        },
        SettingDirectoryButton: {},
        DirectoryTitle: {
            color: 'rgb(135, 134, 130)',
        },
        SelectButtonView: {
            text: {
                color: 'rgb(255, 255, 255)',
            },
            bottomArea: {
                color: 'rgb(185, 187, 190)',
            },
        },
        SettingBoxRadioButtonGroupView: {
            ButtonViewDefault: {
                root: {
                    borderColor: 'rgb(32,34,37)',
                    backgroundColor: 'rgb(48, 50, 55)',
                },
                des: {
                    color: 'rgb(185,187,190)',
                },
                textDefault: {
                    color: 'rgb(255, 255, 255)',
                },
                icon: {
                    color: 'rgb(114,118,125)',
                },
            },
            ButtonViewChoosed: {
                icon: {
                    color: 'rgb(255,255,255)',
                },
                des: {
                    color: 'rgb(255,255,255)',
                },
            },
            SettingBoxRadio: {
                boxShadow: 'rgb(114,118,125)',
            },
        },
        SettingCheckbox: {
            color: 'rgb(220, 221, 222)',
        },
        SettingDivider: {
            DirectoryDivider: {
                background: 'rgb(66, 69, 74)',
            },
            ContentDivider: {
                background: 'rgb(66, 69, 74)',
            },
        },
        SettingDropdown: {
            root: {
                color: 'rgb(246,246,247)',
            },
            input: {
                color: 'rgb(246,246,247)',
                backgroundColor: 'rgb(48, 50, 55)',
            },
        },
        SettingHint: {
            SettingHintIcon: {
                color: 'rgb(173,173,173)',
                hover: 'rgb(255, 255, 255)',
            },
            SettingHintText: {
                color: 'rgb(114,118,125)',
            },
        },
        SettingInput: {
            input: {
                color: 'rgb(221, 221, 222)',
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(37, 39, 43)',
            },
            icon: {
                color: 'rgb(157, 157,157)',
            },
        },
        SettingRoundRadioButtonGroupView: {
            ButtonViewChoosed: {
                language: {
                    color: 'rgb(220, 221, 222)',
                },
                country: {
                    color: 'rgb(185, 187, 190)',
                },
            },
            ButtonViewDefault: {
                icon: {
                    color: 'rgb(114, 118, 125)',
                },
                language: {
                    color: 'rgb(220, 221, 222)',
                },
                country: {
                    color: 'rgb(185, 187, 190)',
                },
            },
        },
        SettingUserInfoView: {
            root: {
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(41, 43, 47)',
            },
            text: {
                color: 'rgb(121, 125, 130)',
            },
            name: {
                color: 'rgb(185, 187, 190)',
            },
            nameCode: {
                color: 'rgb(113, 114, 119)',
            },
            email: {
                color: 'rgb(185, 187, 190)',
            },
        },
        Title: {
            BigTitle: {
                color: 'rgb(255, 255, 255)',
            },
            DefaultTitle: {
                color: 'rgb(255, 255, 255)',
            },
            DesTitle: {
                color: 'rgb(142, 146, 151)',
            },
            LargeTitle: {
                color: 'rgb(255, 255, 255)',
            },
            MaxTitle: {
                color: 'rgb(255, 255, 255)',
            },
            SmallTitle: {
                color: 'rgb(185, 187, 190)',
            },
        },
        SettingView: {
            backgroundColor: 'rgb(47, 49, 54)',
            Content: {
                backgroundColor: 'rgb(47, 49, 54)',
                ThumbBackgroundColor: 'rgb(29,31,34)',
            },
            Sidebar: {
                backgroundColor: 'rgb(47, 49, 54)',
                ThumbBackgroundColor: 'rgb(38,40,44)',
            },
        },
    },
    workspace: {
        Breadcrumb: {
            Divider: {
                color: 'rgb(235,235,235)',
            },
            Arrow: {
                arrowIcon: {
                    color: 'rgb(202,204,206)',
                },
                goBack: {
                    hover: 'rgb(71,76,80)',
                    active: 'rgb(63,68,71)',
                },
                goForward: {
                    hover: 'rgb(71,76,80)',
                    active: 'rgb(63,68,71)',
                },
            },
            BreadcrumbItem: {
                ChipRootColor: 'rgb(235,235,235)',
                ChipHover: 'rgb(71,76,80)',
                ChipActive: 'rgb(63,68,71)',
            },
        },
        PopSearch: {
            backgroundColor: 'rgb(63,68,71)',
            PopSearchHintText: {
                color: 'rgba(255, 255, 255, 0.6)',
            },
            PopSearchInput: {
                iconColor: 'rgb(221, 221, 222)',
                shortkeyColor: 'rgb(150,153,155)',
                inputColor: 'rgb(221, 221, 222)',
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(48, 50, 55)',
            },
        },
        QuickFind: {
            HintTextDefault: {
                root: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                icon: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
            },
            HintTextSearch: {
                count: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
                text: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
            },
            Input: {
                input: {
                    color: 'rgba(255, 255, 255, 0.9)',
                    placeholder: {
                        color: 'rgb(111,113,114)',
                    },
                },
                icon: {
                    color: 'rgba(202, 204, 206, 0.6)',
                },
                cancelIcon: {
                    color: 'rgba(202, 204, 206, 0.4)',
                },
            },
            ItemSearchTitle: {
                title: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
            },
            ItemTitle: {
                title: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
                button: {
                    color: 'rgba(202, 204, 206, 0.6)',
                    hover: {
                        backgroundColor: 'rgb(71,76,80)',
                    },
                    active: {
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                },
            },
            NotFindItem: {
                title: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
                text: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
            },
            RecentPagesItem: {
                itemChoosed: {
                    backgroundColor: 'rgb(71, 76, 80)',
                },
                keyboardReturnIcon: {
                    color: 'rgba(202, 204, 206, 0.6)',
                },
                title: {
                    color: 'rgba(255, 255, 255, 0.9)',
                },
            },
            RecentSearchesItem: {
                itemChoosed: {
                    backgroundColor: 'rgb(71, 76, 80)',
                },
                keyboardReturnIcon: {
                    color: 'rgba(202, 204, 206, 0.6)',
                },
                icon: {
                    color: 'rgba(202, 204, 206, 0.6)',
                },
                title: {
                    color: 'rgba(255, 255, 255, 0.9)',
                },
            },
            SearchResultsItem: {
                itemChoosed: {
                    backgroundColor: 'rgb(71, 76, 80)',
                },
                keyboardReturnIcon: {
                    color: 'rgba(202, 204, 206, 0.6)',
                },
                title: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
                des: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
            },
            SortButton: {
                button: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    hover: {
                        backgroundColor: 'rgb(71, 76, 80)',
                    },
                    active: {
                        backgroundColor: 'rgb(63, 68, 71)',
                    },
                },
                itemList: {
                    backgroundColor: 'rgb(63, 68, 71)',
                },
                item: {
                    color: 'rgba(255, 255, 255, 0.9)',
                    hover: {
                        backgroundColor: 'rgb(71, 76, 80)',
                    },
                    active: {
                        backgroundColor: 'rgb(63, 68, 71)',
                    },
                },
            },
            QuickFind: {
                backgroundColor: 'rgb(47, 52, 55)',
                Divider: {
                    color: 'rgba(255,255,255,0.07)',
                },
            },
        },
        Share: {
            root: {
                backgroundColor: 'rgb(63, 68, 71)',
            },
            Divider: {
                background: 'rgba(255, 255, 255, 0.07)',
            },
            HintItem: {
                color: 'rgba(255, 255, 255, 0.6)',
            },
            HintText: {
                leftHint: {
                    hover: {
                        backgroundColor: 'rgb(71, 76, 80)',
                    },
                    active: {
                        backgroundColor: 'rgb(63,68, 71)',
                    },
                    icon: {
                        color: 'rgba(202, 204, 206, 0.4)',
                    },
                    text: {
                        color: 'rgba(255, 255, 255, 0.4)',
                    },
                },
                rightHint: {
                    hover: {
                        backgroundColor: 'rgb(71, 76, 80)',
                    },
                    active: {
                        backgroundColor: 'rgb(63,68, 71)',
                    },
                    icon: {
                        color: 'rgb(202, 204, 206)',
                    },
                    text: {
                        color: 'rgba(255, 255, 255, 0.9)',
                    },
                },
            },
            ItemList: {
                root: {
                    color: 'rgba(255, 255, 255, 0.9)',
                },
            },
            LinkCopy: {
                text: {
                    color: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(15, 15, 15, 0.2)',
                    backgroundColor: 'rgba(15, 15, 15, 0.3)',
                },
                button: {
                    color: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(255, 255, 255, 0.14)',
                    hover: {
                        backgroundColor: 'rgb(71,76, 80)',
                    },
                    active: {
                        backgroundColor: 'rgb(63,68, 71)',
                    },
                },
            },
            Switch: {
                backgroundColor: 'rgba(108, 112, 114, 1)',
            },
            SwitchItem: {
                icon: {
                    color: 'rgba(202, 204, 206, 0.4)',
                },
                text: {
                    color: 'rgba(255, 255, 255, 0.9)',
                },
                des: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
            },
            ButtonItem: {
                icon: {
                    color: 'rgba(202, 204, 206, 0.4)',
                },
                text: {
                    color: 'rgba(255, 255, 255, 0.9)',
                },
                des: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
            },
        },
        ReName: {
            backgroundColor: 'rgb(63,68,71)',
            Icon: {
                borderColor: 'rgba(255, 255, 255, 0.14)',
                hover: 'rgb(72,76,80)',
                active: 'rgb(64,68,71)',
            },
            Input: {
                borderColor: 'rgba(15, 15, 15, 0.2)',
                backgroundColor: 'rgba(15, 15, 15, 0.3)',
                color: 'rgb(234, 235, 235)',
            },
        },
        SidebarSearch: {
            HintIcon: {
                color: 'rgb(221, 221, 222)',
            },
            ShortKeyIcon: {
                color: 'rgb(150,153,155)',
            },
            Input: {
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(48, 50, 55)',
                color: 'rgb(221, 221, 222)',
            },
        },
        SidebarSwitch: {
            hover: 'rgb(59, 61, 66)',
            active: 'rgb(63,68,71)',
            Title: {
                color: 'rgb(175, 177, 178)',
            },
        },
        StickyBlockBox: {
            Title: {
                color: 'rgb(157,170,182)',
            },
            TitleIcon: {
                color: 'rgb(150,153,155)',
            },
            Item: {
                hover: 'rgb(71,76,80)',
                active: 'rgb(63,68,71)',
            },
            FontH1Default: {
                color: 'rgb(223,224,224)',
            },
            FontH2Default: {
                color: 'rgb(223,224,224)',
            },
            HintIconDefault: {
                background: 'rgb(59, 61, 66)',
            },
        },
        SwitchWorkSpace: {
            Divider: {
                color: '#4F5456FF',
            },
            DragUserWorkView: {
                iconColor: 'rgb(172,174,174)',
                nameColor: 'rgba(255, 255, 255, .9)',
                descColor: 'rgba(255, 255, 255, .6)',
                HintIcon: {
                    color: 'rgba(255, 255, 255, .6)',
                },
            },
            HintButton: {
                color: 'rgb(174,176,177)',
            },
            Container: {
                backgroundColor: 'rgba(63,68,71,1)',
            },
            UserAddButton: {
                Icon: {
                    color: 'rgba(202, 204, 206, .4)',
                },
                Text: {
                    color: 'rgba(255, 255, 255, .9)',
                },
            },
        },
        Trash: {
            HintText: {
                color: 'rgba(255, 255, 255, 0.4)',
                hover: 'rgb(71,76,80)',
                active: 'rgb(63,68,71)',
            },
            Input: {
                placeholder: {
                    color: 'rgb(111,113,114)',
                },
                HintIcon: {
                    color: 'rgb(221, 221, 222)',
                },
                CancelIcon: {
                    color: 'rgb(150,153,155)',
                },
                borderColor: 'rgb(32, 34, 37)',
                backgroundColor: 'rgb(48, 50, 55)',
                color: 'rgb(221, 221, 222)',
            },
            Item: {
                color: 'rgba(255,255,255,0.9)',
                icon: {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
                hover: 'rgb(71,76,80)',
                active: 'rgba(0,0,0,0)',
            },
            Popover: {
                color: 'rgb(13,13,13)',
                backgroundColor: 'rgb(190,193,195)',
            },
            Title: {
                clor: 'rgba(255,255,255,0.9)',
                hover: 'rgb(71,76,80)',
                borderBottomColor: 'rgba(255, 255, 255, 0.9)',
            },
            Divider: {
                color: 'rgba(255,255,255,0.07)',
            },
            backgroundColor: 'rgb(63,68,71)',
        },
        WorkSpaceSetting: {
            ButtonView: {
                text: {
                    color: 'rgba(255, 255, 255, 0.9)',
                },
            },
            WorkSpaceSettingDefaultButton: {
                color: 'rgba(255, 255, 255, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.14)',
                backgroundColor: 'rgb(71,76,80)',
            },
            WorkSpaceSettingTextButton: {
                color: 'rgb(235,235,235)',
                hover: 'rgb(255, 255, 255)',
            },
            WorkSpaceSettingDirectoryButton: {
                color: 'rgba(255, 255, 255, 0.9)',
                hover: 'rgb(71,76,80)',
                active: 'rgb(63,68,71)',
                backgroundColor: 'rgb(71,76,80)',
            },
            WorkSpaceSettingDirectoryTitle: {
                color: 'rgba(255, 255, 255, 0.6)',
            },
            Divider: {
                SettingDividerDefault: {
                    background: 'rgb(66, 69, 74)',
                },
                DirectoryDivider: {
                    background: 'rgb(66, 69, 74)',
                },
            },
            WorkSpaceSettingHintTextButton: {
                color: 'rgba(255, 255, 255, 0.4)',
            },
            IconView: {
                borderColor: ' rgba(255, 255, 255, 0.07)',
                backgroundColor: 'rgb(71, 76, 80)',
            },
            WorkSpaceInput: {
                color: 'rgb(221, 221, 222)',
                backgroundColor: 'rgba(15, 15, 15, 0.3)',
                borderColor: 'rgb(26, 27, 30)',
                borderColorHover: 'rgb(40, 132, 165)',
            },
        },
    },
};
export default componentsThemeDark;
