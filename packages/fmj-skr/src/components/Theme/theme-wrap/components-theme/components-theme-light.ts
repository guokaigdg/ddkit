import componentsThemeDefault from './components-theme-defaule';

/** 明亮模式 */

const componentsThemeLight = {
  ...componentsThemeDefault,

  //全局默认设置
  MuiMenu: {
    paper: {
      background: 'rgb(255, 255, 255)',
    },
  },

  //iffe 主项目使用配色
  settingContent: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  SettingDialogLayout: {
    SidebarArea: {
      backgroundColor: 'rgb(247, 246, 243)',
    },
    ContentArea: {
      backgroundColor: 'rgb(255, 255, 255)',
    },
  },
  Login: {
    root: {
      backgroundColor: 'rgb(255, 255, 255)',
    },
  },
  Regieter: {
    root: {
      backgroundColor: 'rgb(255, 255, 255)',
    },
  },

  // 自定义样式
  common: {
    Button: {
      TextButton: {
        color: '#a0a09b',
        hover: 'rgb(6, 6, 7)',
      },
    },
    Checkbox: {
      boxShadow: 'rgb(185,187,190)',
    },
    ConfirmDialog: {
      topArea: {
        backgroundColor: 'rgb(255,255,255)',
        title: { color: 'rgb(2,2,2)' },
        des: { color: 'rgb(30,35,40)' },
      },
      bottomArea: {
        backgroundColor: 'rgb(245,245,246)',
      },
    },
    Display: {
      root: {
        hover: '#e6ecf1',
        active: '#e6ecf1',
      },
      icon: {
        color: '#989898',
      },
      title: {
        color: '#989898',
      },
    },
    Divider: {
      background: 'rgb(235, 235, 236)',
    },
    Input: {
      borderColor: 'rgb(227, 229, 232)',
      color: 'rgb(0, 0, 0)',
      backgroundColor: 'rgb(252, 252, 252)',
    },
    Loding: {
      color: 'rgb(55,53,47)',
    },
    Radio: {
      icon: {
        color: 'rgb(185,187,190)',
      },
    },
    Select: {
      FormControl: {
        backgroundColor: 'rgb(252, 252, 252)',
      },
      InputLabel: {
        color: 'rgb(187, 193, 199)',
      },
      InputBase: {
        color: 'rgb(35,38,42)',
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(252, 252, 252)',
      },
      MenuItem: {
        color: 'rgb(32,34,37)',
      },
    },
    Title: {
      BigTitle: {
        color: 'rgb(6, 6, 7)',
      },
      DefaultTitle: {
        color: 'rgb(6, 6, 7)',
      },
      DesTitle: {
        color: 'rgb(107, 116, 128)',
      },
      LargeTitle: {
        color: 'rgb(6, 6, 7)',
      },
      MaxTitle: {
        color: 'rgb(6, 6, 7)',
      },
      SmallTitle: {
        color: 'rgb(79, 86, 96)',
      },
    },
  },

  emoji: {
    EmojiDialog: {
      root: {
        backgroundColor: 'rgb(255, 255, 255)',
      },
      divider: {
        color: 'rgba(208, 208, 207, 0.3)',
      },
    },
    EmojiDialogContent: {
      searchArea: {
        borderColor: 'rgb(208, 208, 207)',
        backgroundColor: 'rgb(247, 247, 245)',
      },
      title: {
        color: 'rgb(178,180,181)',
      },
      emojiIcon: {
        hover: 'rgb(239,239,239)',
        active: 'rgb(223,222,222)',
      },
      searchIcon: {
        color: 'rgb(189, 188, 185)',
      },
      cancelIcon: {
        color: 'rgb(189, 188, 185)',
      },
      input: {
        color: 'rgb(46, 51, 56)',
        backgroundColor: 'rgb(247, 247, 245)',
        placeholder: 'rgb(187,193,199)',
      },
    },
    EmojiDialogTop: {
      emojiFont: {
        color: 'rgb(53,53,47)',
      },
      topButton: {
        color: 'rgb(135,134,130)',
        hover: 'rgb(239,239,239)',
        active: 'rgb(223,222,222)',
      },
    },
  },

  setting: {
    AccountEdit: {
      root: {
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(242, 243, 245)',
      },
      AccountEditInput: {
        input: {
          borderColor: 'rgb(227, 229, 232)',
          color: 'rgb(0, 0, 0)',
          backgroundColor: 'rgb(252, 252, 252)',
        },
      },
      TopAccountEdit: {
        title: {
          color: 'rgb(135, 143, 152)',
        },
      },
    },
    BorderTitleView: {
      root: {
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(248,249,249)',
      },
      desc: {
        color: 'rgb(134, 143, 151)',
      },
      text: {
        color: 'rgb(46, 51, 56)',
      },
    },
    DirectoryButton: {
      DirectoryDefaultButton: {
        color: 'rgb(79,86,96)',
        hover: {
          color: 'rgb(6, 6, 7)',
          backgroundColor: 'rgb(232, 234, 237)',
        },
        active: {
          backgroundColor: 'rgb(222 224, 229)',
        },
      },
      DirectoryChoosedButton: {
        color: 'rgb(6, 6, 7)',
        backgroundColor: 'rgb(212, 215, 220)',
      },
      DirectoryBlueButton: {
        hover: 'rgb(228,232,242)',
      },
      DirectoryRedButton: {
        hover: 'rgb(242, 224, 227)',
      },
    },
    SettingDirectoryButton: {},
    DirectoryTitle: {
      color: 'rgb(107, 116, 128)',
    },
    SelectButtonView: {
      text: {
        color: 'rgb(6, 6, 7)',
      },
      bottomArea: {
        color: 'rgb(79,86,96)',
      },
    },
    SettingBoxRadioButtonGroupView: {
      ButtonViewDefault: {
        root: {
          borderColor: 'rgb(227,229,232)',
          backgroundColor: 'rgb(250, 250, 250)',
        },
        des: {
          color: 'rgb(79,86,96)',
        },
        textDefault: {
          color: 'rgb(6, 6, 7)',
        },
        icon: {
          color: 'rgb(185,187,190)',
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
        boxShadow: 'rgb(185,187,190)',
      },
    },
    SettingCheckbox: {
      color: 'rgb(46, 51, 56)',
    },
    SettingDivider: {
      DirectoryDivider: {
        background: 'rgb(235, 235, 236)',
      },
      ContentDivider: {
        background: 'rgb(235, 235, 236)',
      },
    },
    SettingDropdown: {
      root: {
        color: 'rgb(32,34,37)',
      },
      input: {
        color: 'rgb(32,34,37)',
        backgroundColor: 'rgb(252, 252, 252)',
      },
    },
    SettingHint: {
      SettingHintIcon: {
        color: 'rgb(185,187,190)',
        hover: 'rgb(114,128,125)',
      },
      SettingHintText: {
        color: 'rgb(115,128,140)',
      },
    },
    SettingInput: {
      input: {
        color: 'rgb(0, 0, 0)',
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(251, 251, 251)',
      },
      icon: {
        color: 'rgb(171, 173, 176)',
      },
    },
    SettingRoundRadioButtonGroupView: {
      ButtonViewChoosed: {
        language: {
          color: 'rgb(46, 51, 56)',
        },
        country: {
          color: 'rgb(79, 86, 96)',
        },
      },
      ButtonViewDefault: {
        icon: {
          color: 'rgb(185, 187, 190)',
        },
        language: {
          color: 'rgb(46, 51, 56)',
        },
        country: {
          color: 'rgb(79, 86, 96)',
        },
      },
    },
    SettingUserInfoView: {
      root: {
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(242, 243, 245)',
      },
      text: {
        color: 'rgb(135, 143, 152)',
      },
      name: {
        color: 'rgb(79, 84, 92)',
      },
      nameCode: {
        color: 'rgb(164, 167, 171)',
      },
      email: {
        color: 'rgb(79, 84, 92)',
      },
    },
    Title: {
      BigTitle: {
        color: 'rgb(6, 6, 7)',
      },
      DefaultTitle: {
        color: 'rgb(6, 6, 7)',
      },
      DesTitle: {
        color: 'rgb(107, 116, 128)',
      },
      LargeTitle: {
        color: 'rgb(6, 6, 7)',
      },
      MaxTitle: {
        color: 'rgb(6, 6, 7)',
      },
      SmallTitle: {
        color: 'rgb(79, 86, 96)',
      },
    },
    SettingView: {
      backgroundColor: 'rgb(255, 255, 255)',
      Content: {
        backgroundColor: 'rgb(255, 255, 255)',
        ThumbBackgroundColor: 'rgb(137,137,137)',
      },
      Sidebar: {
        backgroundColor: 'rgb(242,243,245)',
        ThumbBackgroundColor: 'rgb(193,195,199)',
      },
    },
  },
  workspace: {
    Breadcrumb: {
      Divider: {
        color: '#a0a09b',
      },
      Arrow: {
        arrowIcon: {
          color: 'rgb(95,93,89)',
        },
        goBack: {
          hover: 'rgb(239,239,239)',
          active: 'rgb(223,222,222)',
        },
        goForward: {
          hover: 'rgb(239,239,239)',
          active: 'rgb(223,222,222)',
        },
      },
      BreadcrumbItem: {
        ChipRootColor: 'rgb(55,53,47)',
        ChipHover: 'rgb(239,239,239)',
        ChipActive: 'rgb(223,222,222)',
      },
    },
    PopSearch: {
      backgroundColor: 'rgb(255, 255, 255)',
      PopSearchHintText: {
        color: 'rgb(55, 53, 47)',
      },
      PopSearchInput: {
        iconColor: 'rgb(0, 0, 0)',
        shortkeyColor: 'rgb(157,170,182)',
        inputColor: 'rgb(0, 0, 0)',
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(252, 252, 252)',
      },
    },
    QuickFind: {
      HintTextDefault: {
        root: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
        icon: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
      },
      HintTextSearch: {
        count: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
        text: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
      },
      Input: {
        input: {
          color: 'rgb(55, 53, 47)',
          placeholder: {
            color: 'rgb(170,169, 165)',
          },
        },
        icon: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
        cancelIcon: {
          color: 'rgba(55, 53, 47, 0.3)',
        },
      },
      ItemSearchTitle: {
        title: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
      },
      ItemTitle: {
        title: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
        button: {
          color: 'rgba(55, 53, 47, 0.4)',
          hover: {
            backgroundColor: 'rgba(55,53,47,0.08)',
          },
          active: {
            backgroundColor: 'rgba(55,53,47,0.16)',
          },
        },
      },
      NotFindItem: {
        title: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
        text: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
      },
      RecentPagesItem: {
        itemChoosed: {
          backgroundColor: 'rgba(55, 53, 47,.08)',
        },
        keyboardReturnIcon: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
        title: {
          color: 'rgb(55, 53, 47)',
        },
      },
      RecentSearchesItem: {
        itemChoosed: {
          backgroundColor: 'rgba(55, 53, 47,.08)',
        },
        keyboardReturnIcon: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
        icon: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
        title: {
          color: 'rgb(55, 53, 47)',
        },
      },
      SearchResultsItem: {
        itemChoosed: {
          backgroundColor: 'rgba(55, 53, 47,.08)',
        },
        keyboardReturnIcon: {
          color: 'rgba(55, 53, 47, 0.4)',
        },
        title: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
        des: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
      },
      SortButton: {
        button: {
          color: 'rgba(55, 53, 47, 0.6)',
          hover: {
            backgroundColor: 'rgba(55, 53, 47,.08)',
          },
          active: {
            backgroundColor: 'rgba(55, 53, 47,.16)',
          },
        },
        itemList: {
          backgroundColor: 'rgb(255, 255, 255)',
        },
        item: {
          color: 'rgb(55, 53, 47)',
          hover: {
            backgroundColor: 'rgba(55, 53, 47,.08)',
          },
          active: {
            backgroundColor: 'rgba(55, 53, 47,.16)',
          },
        },
      },
      QuickFind: {
        backgroundColor: 'rgb(255,255,255)',
        Divider: {
          color: 'rgba(55,53,47,0.09)',
        },
      },
    },
    Share: {
      root: {
        backgroundColor: 'rgb(255, 255, 255)',
      },
      Divider: {
        background: 'rgba(55, 53, 47, 0.09)',
      },
      HintItem: {
        color: 'rgba(55, 53, 47, 0.6)',
      },
      HintText: {
        leftHint: {
          hover: {
            backgroundColor: 'rgba(55, 53, 47, 0.08)',
          },
          active: {
            backgroundColor: 'rgba(55, 53, 47, 0.16)',
          },
          icon: {
            color: 'rgba(55, 53, 47, 0.3)',
          },
          text: {
            color: 'rgba(55, 53, 47, 0.4)',
          },
        },
        rightHint: {
          hover: {
            backgroundColor: 'rgba(55, 53, 47, 0.08)',
          },
          active: {
            backgroundColor: 'rgba(55, 53, 47, 0.16)',
          },
          icon: {
            color: 'rgba(55, 53, 47, 0.8)',
          },
          text: {
            color: 'rgb(55, 53, 47)',
          },
        },
      },
      ItemList: {
        root: {
          color: 'rgb(55, 53, 47)',
        },
      },
      LinkCopy: {
        text: {
          color: 'rgb(55, 53, 47)',
          borderColor: 'rgba(15, 15, 15, 0.1) ',
          backgroundColor: 'rgba(242, 241, 238, 0.6)',
        },
        button: {
          color: 'rgb(55, 53, 47)',
          borderColor: 'rgba(15, 15, 15, 0.1) ',
          hover: {
            backgroundColor: 'rgba(53, 53, 47, 0.08)',
          },
          active: {
            backgroundColor: 'rgba(53, 53, 47, 0.16)',
          },
        },
      },
      Switch: {
        backgroundColor: 'rgba(135, 131, 120, 0.3)',
      },
      SwitchItem: {
        icon: {
          color: 'rgba(55, 53, 47, 0.3)',
        },
        text: {
          color: 'rgb(55, 53, 47)',
        },
        des: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
      },
      ButtonItem: {
        icon: {
          color: 'rgba(55, 53, 47, 0.3)',
        },
        text: {
          color: 'rgb(55, 53, 47)',
        },
        des: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
      },
    },
    ReName: {
      backgroundColor: 'rgb(255,255,255)',
      Icon: {
        borderColor: 'rgb(209,209,208)',
        hover: 'rgb(239,239,239)',
        active: 'rgb(223,222,222)',
      },
      Input: {
        borderColor: 'rgb(204,204,203)',
        backgroundColor: 'rgb(247,247,245)',
        color: 'rgb(55, 53, 48)',
      },
    },
    SidebarSearch: {
      HintIcon: {
        color: 'rgb(0, 0, 0)',
      },
      ShortKeyIcon: {
        color: 'rgb(157,170,182)',
      },
      Input: {
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(252, 252, 252)',
        color: 'rgb(0, 0, 0)',
      },
    },
    SidebarSwitch: {
      hover: '#e6ecf1',
      active: '#e6ecf1',
      Title: {
        color: 'rgb(38,44,51)',
      },
    },
    StickyBlockBox: {
      Title: {
        color: 'rgb(157,170,182)',
      },
      TitleIcon: {
        color: 'rgb(157,170,182)',
      },
      Item: {
        hover: '#e6ecf1',
        active: '#e6ecf1',
      },
      FontH1Default: {
        color: 'rgb(124,136,147)',
      },
      FontH2Default: {
        color: 'rgb(124,136,147)',
      },
      HintIconDefault: {
        background: 'rgb(235, 235, 236)',
      },
    },
    SwitchWorkSpace: {
      Divider: {
        color: '#efefef',
      },
      DragUserWorkView: {
        HintIcon: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
        iconColor: 'rgb(135, 134, 130)',
        nameColor: 'rgb(55, 53, 47)',
        descColor: 'rgb(135, 134, 130)',
      },
      HintButton: {
        color: 'rgb(175, 174, 172)',
      },
      Container: {
        backgroundColor: 'rgba(255,255,255,1)',
      },
      UserAddButton: {
        Icon: {
          color: 'rgb(178, 177, 174)',
        },
        Text: {
          color: 'rgb(55, 53, 47)',
        },
      },
    },
    Trash: {
      HintText: {
        color: 'rgba(55, 53, 47, 0.4)',
        hover: 'rgb(239,239,239)',
        active: 'rgb(223,222,222)',
      },
      Input: {
        placeholder: {
          color: 'rgb(170,169, 165)',
        },
        HintIcon: {
          color: 'rgb(0, 0, 0)',
        },
        CancelIcon: {
          color: 'rgb(157,170,182)',
        },
        borderColor: 'rgb(227, 229, 232)',
        backgroundColor: 'rgb(252, 252, 252)',
        color: 'rgb(0, 0, 0)',
      },
      Item: {
        color: 'rgb(55,53,47)',
        icon: {
          color: 'rgba(55,53,47,.6)',
        },
        hover: 'rgba(55,53,47,0.08)',
        active: 'rgba(55,53,47,0.16)',
      },
      Popover: {
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgb(13,13,13)',
      },
      Title: {
        color: 'rgb(55,53,47)',
        hover: 'rgb(239,239,239)',
        borderBottomColor: 'rgb(55, 53, 47)',
      },
      Divider: {
        color: 'rgba(55,53,47,0.09)',
      },
      backgroundColor: 'rgb(255, 255, 255)',
    },
    WorkSpaceSetting: {
      ButtonView: {
        text: {
          color: 'rgb(55, 53, 47)',
        },
      },
      WorkSpaceSettingDefaultButton: {
        color: '#37352F',
        borderColor: 'rgba(55, 53, 47, 0.16)',
        backgroundColor: 'rgba(55,53,47,0.08)',
      },
      WorkSpaceSettingTextButton: {
        color: '#a0a09b',
        hover: 'rgb(6, 6, 7)',
      },
      WorkSpaceSettingDirectoryButton: {
        color: 'rgb(55, 53, 47)',
        hover: 'rgb(232,231,228)',
        active: 'rgb(216,215,212)',
        backgroundColor: 'rgb(232,231,228)',
      },
      WorkSpaceSettingDirectoryTitle: {
        color: 'rgba(55, 53, 47, 0.6)',
      },
      Divider: {
        SettingDividerDefault: {
          background: 'rgb(235, 235, 236)',
        },
        DirectoryDivider: {
          background: 'rgb(235, 235, 236)',
        },
      },
      WorkSpaceSettingHintTextButton: {
        color: 'rgba(55, 53, 47, 0.4)',
      },
      IconView: {
        borderColor: 'rgba(55, 53, 47, 0.09)',
        backgroundColor: 'rgba(55, 53, 47, 0.08)',
      },
      WorkSpaceInput: {
        color: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(242, 241, 238, 0.6)',
        borderColor: 'rgb(195,196,198)',
        borderColorHover: 'rgb(40, 132, 165)',
      },
      Tables: {
        HeadButtonView: {
          titleText: {
            color: 'rgb(55, 53, 47)',
          },
          piceText: {
            color: 'rgb(55, 53, 47)',
          },
          desText: {
            color: 'rgba(55, 53, 47, 0.6)',
          },
          checkedButton: {
            borderColor: 'rgba(55, 53, 47, 0.16)',
            color: 'rgba(55, 53, 47, 0.6)',
          },
        },
        Tables: {
          name: {
            color: 'rgba(55, 53, 47, 0.6)',
          },
          tableCell: {
            color: 'rgb(55, 53, 47)',
            borderBottomColor: 'rgb(235, 235, 236)',
          },
          tableRow: {
            backgroundColor: 'rgba(0,0,0,.045)',
          },
        },
        TableTitle: {
          color: 'rgb(55, 53, 47)',
        },
      },
      Title: {
        DefaultSmallTitle: {
          color: 'rgb(55,53,47)',
        },
        DesTitle: {
          color: ' rgba(55, 53, 47, 0.6)',
        },
        BigTitle: {
          color: 'rgb(55, 53, 47)',
        },
        LightSmallTitle: {
          color: 'rgba(55, 53, 47, 0.6)',
        },
        DefaultTitle: {
          color: 'rgb(55,53,47)',
        },
      },
    },
  },

  //Tree Collective Component
  Tree: {
    TreeHeader: {
      contentHoverbg: 'rgba(55, 53, 47, 0.08) none repeat scroll 0% 0%',
      textColor: 'rgba(55, 53, 47, 0.4)',
      textHoverColor: 'rgba(55, 53, 47, 0.6)',
      iconColor: '#8e9092',
      iconHoverbg: 'rgba(55, 53, 47, 0.08)',
    },
  },
};
export default componentsThemeLight;
