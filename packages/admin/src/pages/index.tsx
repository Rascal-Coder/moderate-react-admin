import { lazy } from "react";

export const DynamicPageRender = ({
	name,
}: {
	name: keyof typeof pageList;
}) => {
	const Component = pageList[name];
	return <Component />;
};

// MODERATE_AUTO_PAGE_LAZY_IMPORT:START
const HomePage = lazy(() => import("./homePage/homePage"));
const LoginPage = lazy(() => import("./loginPage/loginPage"));
const HelloPage = lazy(() => import("./homePage/helloPage/helloPage"));
// 系统管理 sysPage
// 用户管理
const UserPage = lazy(() => import("./homePage/sysPage/userPage/userPage"));
// 角色管理
const RolePage = lazy(() => import("./homePage/sysPage/rolePage/rolePage"));
// 内容管理 cmsPage
// 图片管理
// 页面管理
const PageDevPage = lazy(() => import("./homePage/devPage/pageDevPage"));
//permissionPage
const PermissionPage = lazy(
	() => import("./homePage/permissionPage/permissionPage"),
);
//storeDevPage
const StoreDevPage = lazy(() => import("./homePage/devPage/storeDevPage"));
//apiDevPage
const ApiDevPage = lazy(() => import("./homePage/devPage/apiDevPage"));

////categoryPage
const CategoryPage = lazy(() => import("./homePage/cmsPage/categoryPage"));

////testPage
const TestPage = lazy(() => import("./homePage/cmsPage/testPage/testPage"));
////test1Page
const Test1Page = lazy(() => import("./homePage/cmsPage/test1Page/test1Page"));
////posPage
const PosPage = lazy(() => import("./homePage/cpdPage/posPage/posPage"));
////marketPage
const MarketPage = lazy(
	() => import("./homePage/cpdPage/marketPage/marketPage"),
);
////marketEditPage
const MarketEditPage = lazy(
	() => import("./homePage/cpdPage/marketEditPage/marketEditPage"),
);
////posEditPage
const PosEditPage = lazy(
	() => import("./homePage/cpdPage/posEditPage/posEditPage"),
);
////rulePage
const RulePage = lazy(() => import("./homePage/cpdPage/rulePage/rulePage"));
////ruleEditPage
const RuleEditPage = lazy(
	() => import("./homePage/cpdPage/rulePage/ruleEditPage/ruleEditPage"),
);
////notFundPage
const NotFundPage = lazy(() => import("./homePage/notFundPage/notFundPage"));
//MODERATE_AUTO_PAGE_LAZY_IMPORT:END
export const pageList = {
	HomePage,
	LoginPage,
	HelloPage,
	UserPage,
	RolePage,
	PageDevPage,
	PermissionPage,
	StoreDevPage,
	ApiDevPage,
	CategoryPage,
	TestPage,
	Test1Page,
	PosPage,
	MarketPage,
	MarketEditPage,
	PosEditPage,
	RulePage,
	RuleEditPage,
	NotFundPage,
};
