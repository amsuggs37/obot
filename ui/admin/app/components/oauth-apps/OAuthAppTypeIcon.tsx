import { NotionLogoIcon } from "@radix-ui/react-icons";
import { KeyIcon } from "lucide-react";
import { BiLogoZoom } from "react-icons/bi";
import {
	FaAtlassian,
	FaGithub,
	FaGitlab,
	FaGoogle,
	FaHubspot,
	FaLinkedin,
	FaMicrosoft,
	FaSalesforce,
	FaSlack,
} from "react-icons/fa";
import { SiPagerduty, SiSmartthings } from "react-icons/si";

import { OAuthProvider } from "~/lib/model/oauthApps/oauth-helpers";
import { cn } from "~/lib/utils";

const IconMap = {
	[OAuthProvider.Atlassian]: FaAtlassian,
	[OAuthProvider.GitHub]: FaGithub,
	[OAuthProvider.Slack]: FaSlack,
	[OAuthProvider.Salesforce]: FaSalesforce,
	[OAuthProvider.Google]: FaGoogle,
	[OAuthProvider.HubSpot]: FaHubspot,
	[OAuthProvider.Microsoft365]: FaMicrosoft,
	[OAuthProvider.Notion]: NotionLogoIcon,
	[OAuthProvider.Zoom]: BiLogoZoom,
	[OAuthProvider.LinkedIn]: FaLinkedin,
	[OAuthProvider.PagerDuty]: SiPagerduty,
	[OAuthProvider.SmartThings]: SiSmartthings,
	[OAuthProvider.Custom]: KeyIcon,
	[OAuthProvider.GitLab]: FaGitlab,
};

export function OAuthAppTypeIcon({
	type,
	className,
}: {
	type: OAuthProvider;
	className?: string;
}) {
	const Icon = IconMap[type] ?? KeyIcon;

	return <Icon className={cn("h-6 w-6", className)} />;
}
