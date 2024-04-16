searchState.loadedDescShard("pyrev_pyc", 0, "Pyrev plugin for pyc parser\nprelude export the loads function from marshal example:\nWhen encountered, store the associated value(s) in …\nThe abstract representation of a command line argument. …\nBehavior of arguments when they are encountered while …\nContainer for parse results.\nThe trait that enables something to be given color.\nBuild a command-line interface.\nWhen encountered, increment a <code>u8</code> counter\nContains the error value\nWhen encountered, display <code>Command::print_help</code>\nWhen encountered, display <code>Command::print_long_help</code>\nWhen encountered, display <code>Command::print_help</code>\nContains the success value\n一个简单的有序字典\nWhen encountered, store the associated value(s) in …\nWhen encountered, act as if <code>&quot;false&quot;</code> was encountered on the …\nWhen encountered, act as if <code>&quot;true&quot;</code> was encountered on the …\nWhen encountered, display <code>Command::version</code>\nSets the program’s description for the short help (<code>-h</code>).\nSpecify how to react to an argument when parsing it.\nFree-form help text for after auto-generated short help (<code>-h</code>…\nFree-form help text for after auto-generated long help (…\nAdd an alias, which functions as a hidden long flag.\nSets a hidden alias to this subcommand.\nAdd aliases, which function as hidden long flags.\nSets multiple hidden aliases to this subcommand.\nAssume unexpected positional arguments are a <code>subcommand</code>.\nAllows values which start with a leading hyphen (<code>-</code>)\nAllows one to implement two styles of CLIs where …\nAllows negative numbers to pass as values.\nAdds an argument to the list of valid possibilities.\nCreate an <code>Arg</code> from a usage string.\nExit gracefully if no arguments are present (e.g. <code>$ myprog</code>…\nAdds multiple arguments to the list of valid possibilities.\nSpecifies that use of an argument prevents the use of …\nReplace prior occurrences of arguments rather than error\nCheck if any args were present on the command line\nSets the author(s) for the help message.\nFree-form help text for before auto-generated short help (…\nFree-form help text for before auto-generated long help (…\nOverrides the runtime-determined name of the binary for …\nPrepare for introspecting on all included <code>Command</code>s\nSets when to color output.\nAllows you to build the <code>Command</code> instance from your …\nThis argument is mutually exclusive with the specified …\nThis argument is mutually exclusive with the specified …\nCheck if values are present for the argument or group id\nCatch problems earlier in the development cycle.\n从字节码对象映射表中解析为AST, …\nValue for the argument when the flag is present but no …\nValue for the argument when the flag is present but no …\nValue for the argument when the flag is present but no …\nValue for the argument when the flag is present but no …\nValue for the argument when not present.\nSpecifies the value of the argument if <code>arg</code> has been used …\nSpecifies multiple values and conditions in the same …\nValue for the argument when not present.\nDelay initialization for parts of the <code>Command</code>\nDisables colorized help messages.\nDisables <code>-h</code> and <code>--help</code> flag.\nDisables the <code>help</code> <code>subcommand</code>.\nDisables <code>-V</code> and <code>--version</code> flag.\nOverrides the runtime-determined display name of the …\nAllows custom ordering of args within the help message.\nSet the placement of this subcommand within the help.\nDisables the automatic delimiting of values after <code>--</code> or …\nCustom error message for post-parsing validation\nThis argument must be passed alone; it conflicts with all …\nSpecifies how to parse external subcommand arguments.\nFind subcommand such that its name or one of aliases …\nFind subcommand such that its name or one of aliases …\nFlatten subcommand help into the current command’s help\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the help message specified via <code>Command::about</code>.\nBehavior when parsing the argument\nReturns the help heading for listing subcommands.\nReturns the help heading for listing subcommands.\nGet <em>all</em> aliases for this argument, if any, both visible …\nIterate through the set of <em>all</em> the aliases for this …\nIterate through the set of <em>all</em> the long aliases for this …\nGet <em>all</em> short aliases for this argument, if any, both …\nIterate through the set of <em>all</em> the short aliases for this …\nGet a list of all arguments the given argument conflicts …\nIterate through the set of arguments.\nGet the authors of the cmd.\nReturns the help heading for listing subcommands.\nReturns the help heading for listing subcommands.\nGet the name of the binary.\nShould we color the output?\nGets the value of a specific <code>ArgAction::Count</code> flag\nGet the default values specified for this argument, if any\nGet the name of the binary.\nConfigured parser for values passed to an external …\nGets the value of a specific <code>ArgAction::SetTrue</code> or …\nIterate through the set of groups.\nGet the help specified for this argument, if any\nGet the help heading specified for this argument, if any\nGet the name of the argument\nGet the index of this argument, if any\nGet the long option name for this argument, if any\nGet the help message specified via <code>Command::long_about</code>.\nGet the long option name and its visible aliases, if any\nGet the long flag of the subcommand.\nGet the long help specified for this argument, if any\nGet the long version of the cmd.\nIterate over values of a specific option or positional …\nParse <code>env::args_os</code>, exiting on failure.\nParse the specified arguments, exiting on failure.\nParse <code>env::args_os</code>, exiting on failure.\nGet the name of the cmd.\nGet the custom section heading specified via …\nGet the number of values for this argument.\nIterate over the values passed to each occurrence of an …\nGets the value of a specific option or positional argument.\nIterate through the <em>options</em>.\nIterate through the <em>positionals</em> arguments.\nGet the names of possible values for this argument. Only …\nIterate over the original argument values.\nIterate over the original values for each occurrence of an …\nGet the short option name for this argument, if any\nGet the short option name and its visible aliases, if any\nGet the short flag of the subcommand.\nReturn the current <code>Styles</code> for the <code>Command</code>\nReturns the help heading for listing subcommands.\nReturns the subcommand value name.\nIterate through the set of subcommands, getting a …\nIterate through the set of subcommands, getting a mutable …\nGet the delimiter between multiple values\nGet the value hint of this argument\nGet the names of values for this argument.\nConfigured parser for argument values\nGet the value terminator for this argument. The …\nGet the version of the cmd.\nGet visible aliases for this argument, if any\nIterate through the <em>visible</em> aliases for this subcommand.\nIterate through the <em>visible</em> long aliases for this …\nGet visible short aliases for this argument, if any\nIterate through the <em>visible</em> short aliases for this …\nSpecifies that an argument can be matched to all child …\nThe name of the <code>ArgGroup</code> the argument belongs to.\nAdds an <code>ArgGroup</code> to the application.\nThe names of <code>ArgGroup</code>’s the argument belongs to.\nAdds multiple <code>ArgGroup</code>s to the <code>Command</code> at once.\nReturns <code>true</code> if this <code>Command</code> has subcommands.\nSets the description of the argument for short help (<code>-h</code>).\nPanic if help descriptions are omitted.\nOverride the current help section.\nSets the help template to be used, overriding the default …\nDo not display the argument in help message.\nSpecifies that this <code>subcommand</code> should be hidden from help …\nDo not display the default value of the argument in the …\nHides an argument from long help (<code>--help</code>).\nDo not display the possible values in the help message.\nTells <code>clap</code> <em>not</em> to print possible values when displaying …\nHides an argument from short help (<code>-h</code>).\nSet the identifier used for referencing this argument in …\nIterate over <code>Arg</code> and <code>ArgGroup</code> <code>Id</code>s via <code>ArgMatches::ids</code>.\nMatch values against <code>PossibleValuesParser</code> without matching …\nTry not to fail on parse errors, like missing option …\nSpecifies the index of a positional argument <strong>starting at</strong> 1.\nThe first index of that an argument showed up.\nAll indices an argument appeared at when parsing.\nAllow partial matches of long arguments or their aliases.\nAllow partial matches of subcommand names and their aliases…\n插入一个资源(要解析的字节码文件路径)\n插入多个\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReport whether <code>Command::allow_external_subcommands</code> is set\nReport whether <code>Arg::allow_hyphen_values</code> is set\nReport whether <code>Command::allow_missing_positional</code> is set\nReport whether <code>Arg::allow_negative_numbers</code> is set\nReport whether <code>Command::arg_required_else_help</code> is set\nReport whether <code>Command::args_conflicts_with_subcommands</code> is …\nReport whether <code>Command::disable_colored_help</code> is set\nReport whether <code>Command::disable_help_flag</code> is set\nReport whether <code>Command::disable_help_subcommand</code> is set\nReport whether <code>Command::disable_version_flag</code> is set\nReport whether <code>Command::dont_delimit_trailing_values</code> is set\nReports whether <code>Arg::exclusive</code> is set\nGet the custom section heading specified via …\nReport whether <code>Arg::global</code> is set\nReport whether <code>Arg::hide_default_value</code> is set\nReport whether <code>Arg::hide_long_help</code> is set\nReport whether <code>Arg::hide_possible_values</code> is set\nReport whether <code>Arg::hide</code> is set\nReport whether <code>Command::hide</code> is set\nReport whether <code>Arg::hide_short_help</code> is set\nReports whether <code>Arg::ignore_case</code> is set\nReports whether <code>Arg::last</code> is set\nReport whether <code>Command::multicall</code> is set\nReport whether <code>Arg::next_line_help</code> is set\nReport whether <code>Command::next_line_help</code> is set\nReport whether <code>Command::no_binary_name</code> is set\nChecks whether this argument is a positional or not.\nReport whether <code>Command::propagate_version</code> is set\nReport whether <code>Arg::require_equals</code> is set\nReports whether <code>Arg::required</code> is set\nReport whether <code>Command::subcommand_negates_reqs</code> is set\nReport whether <code>Command::subcommand_precedence_over_arg</code> is …\nReport whether <code>Command::subcommand_required</code> is set\nReport whether <code>Arg::trailing_var_arg</code> is set\nThis arg is the last, or final, positional argument (i.e. …\nSets the long version of the argument without the …\nSets the program’s description for the long help (<code>--help</code>…\nSets the long version of the subcommand flag without the …\nAdd an alias, which functions as a “hidden” long flag …\nAdd aliases, which function as “hidden” long flag …\nSets the description of the argument for long help (<code>--help</code>…\nSets the version for the long version (<code>--version</code>) and help …\nLimit the line length for wrapping help when using the …\nMultiple-personality program dispatched on the binary name …\nAllows one to mutate an <code>Arg</code> after it’s been added to a …\nAllows one to mutate all <code>Arg</code>s after they’ve been added …\nAllows one to mutate an <code>ArgGroup</code> after it’s been added …\nAllows one to mutate a <code>Command</code> after it’s been added as …\n(Re)Sets the program’s name.\nCreate a new <code>Arg</code> with a unique name.\nCreates a new instance of an <code>Command</code>.\nChange the starting value for assigning future display …\nSet the default section heading for future args.\nRender the help on the line after the argument.\nPlaces the help string for all arguments and subcommands …\nSpecifies that the parser should not assume the first …\nSpecifies the number of arguments parsed per occurrence\n…\nOverrides the <code>clap</code> generated help message (both <code>-h</code> and …\nOverrides the <code>clap</code> generated usage string for help and …\nSets an overridable argument.\nSets multiple mutually overridable arguments by name.\nPrints the short help message (<code>-h</code>) to <code>io::stdout()</code>.\nPrints the long help message (<code>--help</code>) to <code>io::stdout()</code>.\nSpecifies to use the version of the current command for …\nConsume all following arguments.\nReturn values of a specific option or positional argument.\nReturn values for each occurrence of an option.\nReturns the value of a specific option or positional …\nReturn the name and <code>ArgMatches</code> of the current subcommand.\nRender the short help message (<code>-h</code>) to a <code>StyledStr</code>\nRender the long help message (<code>--help</code>) to a <code>StyledStr</code>.\nVersion message rendered as if the user ran <code>--version</code>.\nUsage statement\nVersion message rendered as if the user ran <code>-V</code>.\nRequires that options use the <code>--option=val</code> syntax\nSpecifies that the argument must be present.\nThis argument is required only if the specified <code>arg</code> is …\nSpecify this argument is required based on multiple …\nSpecify this argument is required based on multiple …\nSet this arg as required as long as the specified argument …\nSets this arg as required unless <em>all</em> of the specified …\nSets this arg as required unless <em>any</em> of the specified …\nSets an argument that is required when this one is present\nRequire another argument if this arg matches the …\nAllows multiple conditional requirements.\nSet binary name. Uses <code>&amp;mut self</code> instead of <code>self</code>.\nSets the short version of the argument without the …\nAdd an alias, which functions as a hidden short flag.\nAdd aliases, which functions as a hidden short flag.\nSets the short version of the subcommand flag without the …\nAdd an alias, which functions as  “hidden” short flag …\nAdd aliases, which function as “hidden” short flag …\nSets the <code>Styles</code> for terminal output\nAdds a subcommand to the list of valid possibilities.\nThe name and <code>ArgMatches</code> of the current subcommand.\nSets the help heading used for subcommands when printing …\nThe <code>ArgMatches</code> for the current subcommand.\nThe name of the current subcommand.\nAllows <code>subcommands</code> to override all requirements of the …\nPrevent subcommands from being consumed as an arguments …\nIf no <code>subcommand</code> is present at runtime, error and exit …\nSets the value name used for subcommands when printing …\nAdds multiple subcommands to the list of valid …\nReturns whether this action accepts values on the …\nSets the terminal width at which to wrap help messages.\nThis is a “VarArg” and everything that follows should …\nNon-panicking version of <code>ArgMatches::contains_id</code>\nNon-panicking version of <code>ArgMatches::get_many</code>\nParse <code>env::args_os</code>, returning a <code>clap::Result</code> on failure.\nParse the specified arguments, returning a <code>clap::Result</code> on …\nParse the specified arguments, returning a <code>clap::Result</code> on …\nNon-panicking version of <code>ArgMatches::get_occurrences</code>\nNon-panicking version of <code>ArgMatches::get_one</code>\nNon-panicking version of <code>ArgMatches::get_raw</code>\nNon-panicking version of <code>ArgMatches::get_raw_occurrences</code>\nNon-panicking version of <code>ArgMatches::remove_many</code>\nNon-panicking version of <code>ArgMatches::remove_occurrences</code>\nNon-panicking version of <code>ArgMatches::remove_one</code>\nAllow grouping of multiple values via a delimiter.\nProvide the shell a hint about how to complete this …\nPlaceholder for the argument’s value in the help message …\nPlaceholders for the argument’s values in the help …\nSpecify the typed behavior of the argument.\nSelect a <code>ValueParser</code> implementation from the intended type\nReport where argument value came from\nSentinel to <strong>stop</strong> parsing multiple values of a given …\nSets the version for the short version (<code>-V</code>) and help …\nAdd an alias, which functions as a visible long flag.\nSets a visible alias to this subcommand.\nAdd aliases, which function as visible long flags.\nSets multiple visible aliases to this subcommand.\nAdd an alias, which functions as a “visible” long flag …\nAdd aliases, which function as <em>visible</em> long flag …\nAdd an alias, which functions as a visible short flag.\nAdd aliases, which function as visible short flags.\nAdd an alias, which functions as  “visible” short flag …\nAdd aliases, which function as <em>visible</em> short flag …\n指定输出地址\n指定多个输出地址")