const generateNavLinks = (companyData) => {
    const navLinks = {};
    
    if (!companyData) return navLinks;
    
    const headerVar = companyData?.DATA?.HEADER;
    if (!headerVar) return navLinks;

    if (headerVar.PROFILE) {
        navLinks.profile = {
            fl_name: headerVar.PROFILE,
            fl_display_name: headerVar.PROFILEDISPNAME,
            sub_profile: []
        };

        const subProfiles = [
            { name: 'PROFILE1', display: 'PROFILE1DISPNAME' },
            { name: 'PROFILE2', display: 'PROFILE2DISPNAME' },
            { name: 'CORPORATEVIDEOLINK', display: 'CORPORATEVIDEOTITLE' },
            { name: 'TESTIMONIALS', display: 'TESTIMONIALS_DISPNAME' },
            { name: 'AWARDS', display: 'AWARDS_DISPNAME' },
            { name: 'INFRASTRUCTURE_LINK', display: 'INFRASTRUCTURE_TITLE' },
            { name: 'QUALITY_LINK', display: 'QUALITY_TITLE' },
            { name: 'CUSTOM_PROFILE_LINK', display: 'CUSTOM_PROFILE_TITLE' },
            { name: 'CORPORATEBROCHURELINK', display: 'CORPORATEBROCHURETITLE' },
            { name: 'CORPORATEPRESENTATIONLINK', display: 'CORPORATEPRESENTATIONTITLE' },
            { name: 'JOBS', display: 'JOBS_DISPNAME' },
            { name: 'NEWS', display: 'NEWS_DISPNAME' },
            { 
                name: 'FRANCHISE_LINK', 
                display: 'FRANCHISE Enquiry Form', 
                custom: (headerVar) => headerVar.FRANCHISE_LINK || 'Franchisee' 
            }
        ];

        subProfiles.forEach(({ name, display }) => {
            if (headerVar[name]) {
                navLinks.profile.sub_profile.push({
                    fl_name: name === 'FRANCHISE_LINK' ? "franchisee.html" : headerVar[name],
                    fl_display_name: name === 'FRANCHISE_LINK' 
                        ? (headerVar[name] || 'Franchisee') + ' Enquiry Form' 
                        : headerVar[display]
                });
            }
        });
        

        let i = 3;
        while (headerVar[`PROFILE${i}FILENAME`]) {
            navLinks.profile.sub_profile.push({
                fl_name: headerVar[`PROFILE${i}FILENAME`],
                fl_display_name: headerVar[`PROFILE${i}DISPNAME`]
            });
            i++;
        }
    }

    const catName = headerVar.CAT_INDEX_DISP_NAME || 'Product Range';
    if (headerVar.CAT_INDEX) {
        navLinks.cat_complex = {
            fl_name: headerVar.CAT_INDEX,
            fl_display_name: catName,
            subcat_link: []
        };
        
        if (companyData.DATA?.PRDNAV) {
            const newItems = [];
            companyData.DATA.PRDNAV.forEach(temp => {
                const tempA = { fl_display_name: temp.CAT_NAME, fl_name: temp.CATFLNAME };
                if (temp.CAT_NAME === 'New Items') {
                    newItems.push(tempA);
                } else {
                    navLinks.cat_complex.subcat_link.push(tempA);
                }
            });
            navLinks.cat_complex.subcat_link.push(...newItems);
        }
    }

    return navLinks;
};

export default generateNavLinks;
